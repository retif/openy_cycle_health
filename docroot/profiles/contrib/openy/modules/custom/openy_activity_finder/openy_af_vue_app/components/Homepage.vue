<template>
  <div>
    <div class="text-center">
      <div v-if="hideProgramBlock == 0" class="program-search-wrapper">
        <h1 class="program-search__form--title">Program Search</h1>
        <form v-if="!isSearchBoxDisabled" class="program-search__form" role="search">
          <div class="row row-eq-height justify-content-center">
            <div class="col-12 col-xs-12 col-md-6 col-lg-4 d-flex">
              <input type="text" class="program-search__keywords" v-model="keywords" id="program-search__keywords" placeholder="Keywords ..."/>
              <button @click.prevent="submitSearch()" v-bind:disabled="isSearchSubmitDisabled" type="submit" class="btn btn-primary text-white rounded-0">
                <i class="fa fa-search" aria-hidden="true"><span class="visually-hidden">Submit</span></i>
              </button>
            </div>
          </div>
        </form>

        <a v-bind:href="this.programSearchUrlWithExclude" v-if="this.$parent.isMounted" class="program-search__view-all-programs"><strong>View all programs</strong></a>
        <p v-if="this.$parent.loading">
          <spinner></spinner>
        </p>
        <div v-if="!this.$parent.loading" class="program-search__count-results">{{ count }} results</div>
        <a v-bind:href="this.programSearchUrlWithLocations" v-if="this.$parent.isMounted && this.$parent.homeBranchId" class="program-search__view-all-programs"><strong>View all programs for Home Branch</strong></a>
        <p v-if="this.$parent.homeBranchLoading && this.$parent.homeBranchId">
          <spinner></spinner>
        </p>
        <div v-if="!this.$parent.homeBranchLoading && this.$parent.homeBranchId" class="program-search__count-results">{{ countHomeBranch }} results</div>
      </div>

      <h2 class="program-search__af-title">Activity Finder</h2>
      <p class="program-search__af-description">
        We can help you find the right activities for you and your family!
        <b>How should we begin?</b>
      </p>

      <div class="program-search__af-routing--links">
        <router-link :to="{name: 'af-age'}" @click.native="setInitialStep('age')" class="af-routing--link btn btn-primary btn-block btn-lg">By Age</router-link>
        <router-link :to="{name: 'af-day'}" @click.native="setInitialStep('day')"  class="af-routing--link btn btn-primary btn-block btn-lg">By Day Of Week</router-link>
        <router-link :to="{name: 'af-activity'}" @click.native="setInitialStep('activity')"  class="af-routing--link btn btn-primary btn-block btn-lg">By Activity</router-link>
      </div>

    </div>
  </div>
</template>

<script>
  import Spinner from '../components/Spinner.vue'

  export default {
    data () {
      return {
        keywords: '',
        isSearchSubmitDisabled: true,
        isSearchBoxDisabled: drupalSettings.activityFinder.is_search_box_disabled
      };
    },
    components: {
      Spinner
    },
    computed: {
      count: function() {
        return this.$parent.table.count;
      },
      countHomeBranch: function() {
        return this.$parent.countHomeBranch;
      },
      homeBranchId: function() {
        return this.$parent.homeBranchId;
      },
      programSearchUrlWithExclude: function() {
        if (typeof this.$parent.categoriesExclude !== 'undefined' && this.$parent.categoriesExclude.length > 0) {
          return this.$parent.programSearchUrl + '?exclude=' + this.$parent.categoriesExclude.join(',');
        }
        return this.$parent.programSearchUrl;
      },
      programSearchUrlWithLocations: function() {
        if (this.homeBranchId) {
          var url = this.$parent.programSearchUrl + '?locations=' + this.homeBranchId;
          if (typeof this.$parent.categoriesExclude !== 'undefined' && this.$parent.categoriesExclude.length > 0) {
            url = url + '&exclude=' + this.$parent.categoriesExclude.join(',');
          }
          return url;
        }
      },
      hideProgramBlock: function () {
        if ('OpenY' in window
          && typeof window.OpenY.field_prgf_hide_program_block != 'undefined'
          && typeof window.OpenY.field_prgf_hide_program_block[0] != 'undefined'
        ) {
          return window.OpenY.field_prgf_hide_program_block[0]['value'];
        }
        else {
          return 0;
        }
      },
    },
    methods: {
      setInitialStep: function(stepName) {
        this.$parent.$emit('setInitialStep', stepName);
      },
      submitSearch: function () {
        // Redirect to Search page.
        this.$parent.$emit('submitSearch');
      }
    },
    watch: {
      'keywords': function(newValue, oldValue) {
        var component = this.$parent;
        component.keywords = newValue;
        this.isSearchSubmitDisabled = newValue === '' ?  true : false;
      }
    }
  }
</script>
