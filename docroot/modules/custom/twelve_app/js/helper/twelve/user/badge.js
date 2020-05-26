import local_storage from "../local_storage";
const axios = require('axios');

/**
 * Function that creates Bingo badge node.
 */
function create_bingo(game_nid) {
  create(game_nid, 'Bingo');
}

/**
 * Function that creates Blackout Bingo badge node.
 */
function create_full_bingo(game_nid) {
  create(game_nid, 'Blackout Bingo');
}

/**
 * Function that creates Hidden Picture node.
 */
function create_hidden_image(game_nid) {
  create(game_nid, 'Hidden Picture');
}

function create(game_nid, badge_type) {

  console.log('ping');

  let local_storage_progress_id = local_storage.get_progress_nid(game_nid);

  let badge_type_id = '';

  if (badge_type in drupalSettings.badges) {
    badge_type_id = drupalSettings.badges[badge_type];
    console.log(badge_type_id);
  } else {
    return;
  }

  let url = window.location.origin + '/node';

  let data = {
    'type': 'badge',
    'title': {
      'value': badge_type
    },
    'field_badge_type': {
      'value': badge_type_id,
    },
    'field_results': {
      'value': local_storage_progress_id,
    },
  };

  console.log(data);

  axios({url: '/session/token'}).then(token_data => {
    axios({
      method: 'post',
      url: url,
      data: data,
      headers: {
        "X-CSRF-Token": token_data.data
      },
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      //@TODO Add error handler
    });
  }).catch(function (error) {
  });

}

export default {
  create_bingo,
  create_full_bingo,
  create_hidden_image
}