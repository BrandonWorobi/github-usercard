import axios from 'axios'

const cards = document.querySelector('.cards')
axios.get('https://api.github.com/user/BrandonWorobi')

  .then((githubinfo) => {
  cards.appendChild(cardMaker(githubinfo.data))
})

const followersArray = ['Brandonworobi','SelfCheckout94', 'JamariaSims', 'bverfurth', 'omtmn', 'ray-rafe', 'ShariqAli-Dev',];


followersArray.forEach(userName => {
  axios.get(`https://api.github.com/users/${userName}`)
  .then((fullData => {
    cards.appendChild(cardMaker(fullData.data))
  }))
})

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}){

  let card = document.createElement('div')
  let img = document.createElement('img')
  let info = document.createElement('div')
  let nameTag = document.createElement('h3')
  let userNameTag = document.createElement('p')
  let locationTag = document.createElement('p')
  let profileTag = document.createElement('p')
  let profileLink = document.createElement('a')
  let followersTag = document.createElement('p')
  let followingTag = document.createElement('p')
  let bioTag = document.createElement('p')

  card.classList.add('card')
  img.src = avatar_url
  info.classList.add('card-info')
  nameTag.classList.add('name')
  userNameTag.classList.add('username')
  profileLink.href = html_url

  nameTag.textContent = name
  userNameTag.textContent = login

  locationTag.textContent = `Location: ${location}`
  profileTag.textContent = 'Profile:'
  profileLink.textContent = html_url
  followersTag.textContent = `Followers: ${followers}`
  followingTag.textContent = `Following: ${following}`
  bioTag.textContent = `Bio: ${bio}`

  //merging elements to the card
  info.appendChild(nameTag)
  info.appendChild(userNameTag)
  info.appendChild(locationTag)
  profileTag.appendChild(profileLink)
  info.appendChild(profileTag)
  info.appendChild(followersTag)
  info.appendChild(followingTag)
  info.appendChild(bioTag)
  card.appendChild(img)
  card.appendChild(info)

  return card
}