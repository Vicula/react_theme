import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function getImages(id){
  var url;
  fetch(EnviroSettings.URL.api + "/media/"+id)
      .then(function (response) {

          if (!response.ok) {
              throw Error(response.statusText);
          }

          return response.json();
      })
      .then(function (results) {

          url = results['source_url'];
          return results['source_url'];
      }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });

  return { type: types.FETCH_STUFF,url}
}

export function fetchStuff() {
  return {}
}
