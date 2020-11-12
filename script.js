// const githubData ={
//     "token":"9bcb6cde9101d2ed069c998bf21dcfd8050c9fa1",
//     "username":"bankymono"
// }

// const body = {
//     "query":`
//     query { 
//         user(login:${githubData.username}) { 
//           repositories(first:20){
//             nodes{
//               name,
//               languages(first:1) {
//                 edges {
//                   node {
//                     name
//                   }
//                 }
//               },
//               stargazerCount,
//                       forkCount,
//               updatedAt
//             }
//           }
//         }
//       }
//     `
// }

// fetch('./api/some.json')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

//   const baseUrl = "https://api.github.com/graphql";
//   const headers = {
//       "Content-Type":"application/json",
//       "Authentication":"bearer" + githubData["token"]
//   }

//   fetch(baseUrl,{
//       method:"POST",
//       headers:headers,
//       body: JSON.stringify(body)
//   }).then(res=>{
//       console.log(JSON.stringify(res))
//   })
//   .catch(err=>{
//       console.log(JSON.stringify(err))
//   })


const repositoriesInfo = {
    "data": {
      "user": {
        "repositories": {
          "nodes": [
            {
              "name": "budget-app",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-04-04T14:52:09Z"
            },
            {
              "name": "quizapp",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-04-02T12:38:36Z"
            },
            {
              "name": "covid-19-estimator-js",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "JavaScript",
                      "color": "#f1e05a"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-04-14T20:43:03Z"
            },
            {
              "name": "covid-19-frontend-2",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-04-14T12:22:15Z"
            },
            {
              "name": "galeria",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "Ruby",
                      "color": "#701516"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-05-18T23:31:45Z"
            },
            {
              "name": "-NodeProject",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "JavaScript",
                      "color": "#f1e05a"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-06-23T13:21:12Z"
            },
            {
              "name": "maps-project-4",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-06-21T09:01:24Z"
            },
            {
              "name": "movie-app",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-06-30T16:39:23Z"
            },
            {
              "name": "confusion",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "JavaScript",
                      "color": "#f1e05a"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-05T00:57:40Z"
            },
            {
              "name": "devops-intro-project",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "Shell",
                      "color": "#89e051"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-07-11T19:29:20Z"
            },
            {
              "name": "APIAuthentication",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "JavaScript",
                      "color": "#f1e05a"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-19T12:17:53Z"
            },
            {
              "name": "banky-tiidelab-projects",
              "languages": {
                "edges": []
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-12T08:44:48Z"
            },
            {
              "name": "Bankole_Ayodeji_TIIDELAB_Self_Learning_Assessment_Project",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "JavaScript",
                      "color": "#f1e05a"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-17T13:38:21Z"
            },
            {
              "name": "helelelee",
              "languages": {
                "edges": []
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-12T20:50:25Z"
            },
            {
              "name": "ContactForm",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "CSS",
                      "color": "#563d7c"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-13T13:11:58Z"
            },
            {
              "name": "netlifytest",
              "languages": {
                "edges": []
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-17T09:30:36Z"
            },
            {
              "name": "banky-portfolio-site",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-10-05T11:13:50Z"
            },
            {
              "name": "client",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-08-19T09:16:58Z"
            },
            {
              "name": "project-management-tool",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "CSS",
                      "color": "#563d7c"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 6,
              "updatedAt": "2020-09-26T04:11:17Z"
            },
            {
              "name": "bankole_ayodeji_tiide_lab_js_assignment",
              "languages": {
                "edges": [
                  {
                    "node": {
                      "name": "HTML",
                      "color": "#e34c26"
                    }
                  }
                ]
              },
              "stargazerCount": 0,
              "forkCount": 0,
              "updatedAt": "2020-09-09T13:26:21Z"
            }
          ]
        }
      }
    }
  }
  const nodes = repositoriesInfo.data.user.repositories.nodes
  
  function displayRepo(){

      placeholder =""
      for(i=0; i < nodes.length;++i){
          d = new Date(nodes[i].updatedAt)
        placeholder +=`<div class="repos-item">

        <div>
            <div class="proj-name">${nodes[i].name}</div>
            <div class="proj-info">
                <span><i style="color:${nodes[i].languages.edges.map(edge=>edge.node.color)};"class="fas fa-circle"></i>${nodes[i].languages.edges.map(edge=>edge.node.name)}</span>
                <span><i class="far fa-star"></i>${nodes[i].stargazerCount}</span>
                <span><i class="fas fa-code-branch"></i>${nodes[i].forkCount}</span>
                <span><i class="fas fa-code-branch"></i>${d.getFullYear()}</span>
                
            </div>
        </div>
        <div class="star"><i class="far fa-star"></i>star</div>
       </div><hr>`  
    }

      

     document.getElementById('repoDisplay').innerHTML = placeholder
  }

  displayRepo()