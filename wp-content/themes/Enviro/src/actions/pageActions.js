import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

function goGetImage(id){
    fetch(EnviroSettings.URL.api + "/media/"+id)
      .then(function (response) {

          if (!response.ok) {
              throw Error(response.statusText);
          }

          return response.json();
      })
      .then(function (results) {


          return results['source_url'];
      }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });
}

export function getImages(id){
  return goGetImage(id);
}

export function fetchStuff() {
  return {}
}
