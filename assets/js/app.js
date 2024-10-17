var cl = console.log;

const snackBar = (msg, icon) => {
  Swal.fire({
      title: msg,
      icon : icon,
      timer:2500,
  })   
}

const hrCall = (skill) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      let success = skill.toLowerCase().includes('angular') ? true : false

      if(success){
        resolve('A candidate is shortlisted for given Angular Profile')
      }else{
        reject('Looking for the Angular Candidated')
      }

    },2000)
  })
}

const firstTechIntv = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() >= .5 ? true : false 

      if(success){
        resolve('A candidate is shortlisted for the 2nd Round')
      }else{
        reject('The Candidate is not good in basics !! ')
      }


    },1500)
  })
}

const secondTechIntv = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() >= .5 ? true : false 

      if(success){
        resolve('A candidate is shortlisted for ML Round')
      }else{
        reject('The candidate is strugling to write code')
      }

    },1000)
  })
}

const MLRound = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      let success = Math.random() >= .5 ? true :false 

      if(success){
        resolve('A candidate is selected for a given profile')
      }else{
        reject('The candidate is not able to explain his/her previous project')
      }

    },700)
  })
}

hrCall('angular')
    .then(msg => {
      snackBar(msg, "success");
      return firstTechIntv();
    })
    .then(msg => {
      snackBar(msg, "success");
      return secondTechIntv();
    })
    .then(msg => {
      snackBar(msg, "success");
      return MLRound();
    })
    .then(msg => {
      snackBar(msg, "success");
    })
    
    .catch(err => {
      snackBar(err, "error");
    })