import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/lisamdespain`)
.then((res) => {
  createProfileCard(res.data);
})
.catch((err) =>{
  console.log(err);
})
.finally(() =>{
console.log("DONE!")
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
];


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createProfileCard(obj){
  const profileCardDiv = document.createElement('div');
  profileCardDiv.classList.add('card');
  document.querySelector('.cards').appendChild(profileCardDiv);
  
  const bioPic = document.createElement('img');
  bioPic.src = obj.avatar_url;
  profileCardDiv.appendChild(bioPic);
  
  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  profileCardDiv.appendChild(cardInfoDiv);

  const userName = document.createElement('h3');
  userName.classList.add('name');
  userName.textContent = obj.name;
  cardInfoDiv.appendChild(userName);

  const userNameShort = document.createElement('p');
  userNameShort.classList.add('username');
  userNameShort.textContent = obj.login;
  cardInfoDiv.appendChild(userNameShort);

  const userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${obj.location}`;
  cardInfoDiv.appendChild(userLocation);

  const userProfileUrl = document.createElement('p');
  const userProfileLink = document.createElement('a');
  userProfileLink.textContent = obj.html_url;
  userProfileLink.href = obj.html_url;
  userProfileUrl.textContent = 'Profile: ' + userProfileLink;
  
  cardInfoDiv.appendChild(userProfileUrl);

  const userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${obj.followers}`;
  cardInfoDiv.appendChild(userFollowers);

  const userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${obj.following}`;
  cardInfoDiv.appendChild(userFollowing);

  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${obj.bio}`;
  cardInfoDiv.appendChild(userBio);
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
followersArray.forEach(person =>{
  axios.get(`https://api.github.com/users/${person}`)
.then((res) => {
  createProfileCard(res.data);
})
.catch((err) =>{
  console.log(err);
})
.finally(() =>{
console.log("DONE!")
})
})