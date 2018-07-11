var GetImage = (id)=>{
  fetch(EnviroSettings.URL.api + "/media/"+id)
      .then(function (response) {

          if (!response.ok) {
              throw Error(response.statusText);
          }

          return response.json();
      })
      .then(function (results) {
        console.log(results['source_url']);
          return results['source_url'];
      }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });
}

export default GetImage;
