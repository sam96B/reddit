const postsContainer = document.querySelector('.post-container-light');
const navRight = document.querySelector('#navRight');
const createPostBtn = document.querySelector('#create-post-btn');
const modal = document.querySelector('#myModal');
const addPostbtn = document.querySelector('#create-post-request-btn');
const postForm = document.querySelector('#post-form');

createPostBtn.onclick = () => {
  modal.style.display = 'block';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
/*
addPostbtn.addEventListener('click',()=>{
  fetch('/')
})*/

const fetchRequest = (endpoint, method, body) => fetch(endpoint, {
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});
const upvoteDom = (postId, upVoted) => {
  fetch('/upVote', {
    method: upVoted == 1 ? 'DELETE' : 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post_id: postId }),

  }).then((data) => {
    if (data.redirected) {
      window.location.href = data.url;
    }
  }).catch((err) => { console.log(err); });
};

const downvoteDom = (e, downVoted) => {
  fetch('/downVote', {
    method: downVoted == 1 ? 'DELETE' : 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post_id: e }),

  }).then((data) => {
    if (data.redirected) {
      window.location.href = data.url;
    }
  }).catch(() => { console.log('errorrrr'); });
};
const createElement = (tag, classes, innerText, href, eventType, eventFunction, type, value, postId, upVoted, downVoted) => {
  // create HTML element
  const element = document.createElement(tag);
  // add element classes
  if (classes) { for (let i = 0; i < classes.length; i++) element.classList.add(classes[i]); }
  // add element innerText
  if (innerText) { element.appendChild(document.createTextNode(innerText)); }
  // add element href
  if (href) { element.href = href; }
  // add event listener

  // if (eventType) {

  // }

  // specify element type
  if (type) { element.type = type; }
  // add value
  if (value) { element.value = value; }
  return element;
};

const clear = (element) => {
  while (element.firstChild) { element.removeChild(element.firstChild); }
};
const createPost = (votes, text_content, postID, comments_count, username, time, imgUrl, upVoted, downVoted) => {
  
  const listItem = createElement('i');
  const postWrapper = createElement('div', ['post-wrapper-light']);
  const compWrapper = createElement('div', ['component-wrapper-light']);
  compWrapper.addEventListener('click', (event) => {
    if (upVoted === undefined || downVoted === undefined) {
      window.location = '/signup';
      return;
    }
    const votesCount = event.path[1].childNodes[1];
    const downButt = event.path[1].childNodes[3];
    const upButt = event.path[1].childNodes[0];
    if (event.target.className.includes('upvote')) {
      upvoteDom(postID, upVoted);
      if (upVoted == 1) {
        upVoted = 0;
        votesCount.innerText = (+votesCount.innerText) - 1;
        event.target.setAttribute('class', 'upvote-0-button-light');
      } else {
        if (downVoted == 1) {
          downVoted = 0;
          votesCount.innerText = (+votesCount.innerText) + 2;
          downButt.setAttribute('class', 'downvote-0-button-light');
        } else {
          votesCount.innerText = (+votesCount.innerText) + 1;
        }

        upVoted = 1;

        event.target.setAttribute('class', 'upvote-1-button-light');
      }
    } else if (event.target.className.includes('downvote')) {
      downvoteDom(postID, downVoted);
      if (downVoted == 1) {
        downVoted = 0;
        votesCount.innerText = (+votesCount.innerText) + 1;
        event.target.setAttribute('class', 'downvote-0-button-light');
      } else {
        if (upVoted == 1) {
          upVoted = 0;
          votesCount.innerText = (+votesCount.innerText) - 2;
          upButt.setAttribute('class', 'upvote-0-button-light');
        } else {
          votesCount.innerText = (+votesCount.innerText) - 1;
        }
        downVoted = 1;
        event.target.setAttribute('class', 'downvote-1-button-light');
      }
    }
  });
  const idInput = createElement('input', null, null, null, null, null, 'hidden', postID);
  const upvoteBtn = createElement('button', [`upvote-${upVoted == 1 ? 1 : 0}-button-light`], null, null, 'click', upvoteDom, null, null, postID, upVoted, downVoted);
  const voteNumSpan = createElement('span', ['votes-count'], `${votes}`);
  const downvoteBtn = createElement('button', [`downvote-${downVoted == 1 ? 1 : 0}-button-light`], null, null, 'click', downvoteDom, null, null, postID, upVoted, downVoted);
  const contentWrapper = createElement('div', ['content-wrapper-light']);

  const textWrapper = createElement('div', ['post-text-wrapper-light'], text_content);
  const detailWrapper = createElement('div', ['detail-wrapper-light']);
  const commentNum = createElement('a', null, `${comments_count} comments`);

  const test = createElement('div', ['post-detailes']);
  const bySpan = createElement('span', null, 'by');
  const ProfileLink = createElement('a', ['owner-light'], username, '/users/1');
  const timeSpan = createElement('span', null, time);
  const userImg = document.createElement('img');

  userImg.src = imgUrl;
  userImg.setAttribute('class', 'user-img');

  test.appendChild(bySpan);
  test.appendChild(userImg);
  test.appendChild(ProfileLink);
  test.appendChild(timeSpan);
  compWrapper.appendChild(upvoteBtn);
  compWrapper.appendChild(voteNumSpan);
  compWrapper.appendChild(idInput);
  compWrapper.appendChild(downvoteBtn);

  detailWrapper.appendChild(commentNum);
  detailWrapper.appendChild(test);
  /* detailWrapper.appendChild(bySpan);
  detailWrapper.appendChild(ProfileLink);
  detailWrapper.appendChild(timeSpan); */

  contentWrapper.appendChild(textWrapper);
  contentWrapper.appendChild(detailWrapper);

  postWrapper.appendChild(compWrapper);
  postWrapper.appendChild(contentWrapper);

  listItem.appendChild(postWrapper);
  return listItem;
};
// votes, text_content, postID, comments_count, username, time
const createPosts = (posts) => {
  clear(postsContainer);
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postElement = createPost(
      post.votes_count,
      post.text_content,
      post.post_id,
      post.comments_count,
      post.username,
      post.time,
      post.img_url,
      post.up_voted,
      post.down_voted,
    );
    postsContainer.appendChild(postElement);
  }
};

const fetchCategory = (endPoint) => {
  fetchRequest(endPoint, 'GET')
    .then((data) => data.json())
    .then((data) => createPosts(data))
    .catch((err) => { console.log(err); });
};

const createUserSection = (img_url, id, username) => {
  
  postForm.setAttribute('action',`/posts/${id}`);
  postForm.setAttribute('method','post');

  const arr = [];
  const node_1 = document.createElement('A');
  node_1.setAttribute('class', 'user-light active');
  node_1.setAttribute('href', `/users/${id}`);

  const node_2 = document.createElement('SPAN');
  node_2.setAttribute('class', 'username-light active');
  node_1.appendChild(node_2);

  const node_3 = document.createTextNode((new String(username)));
  node_2.appendChild(node_3);
  arr.push(node_1);
  const node_4 = document.createElement('A');
  node_4.setAttribute('class', 'logout-container-light');
  node_4.setAttribute('href', '/logout');

  const node_5 = document.createElement('SPAN');
  node_5.setAttribute('class', 'logout-light');
  node_4.appendChild(node_5);

  const node_6 = document.createTextNode((new String('log out')));
  node_5.appendChild(node_6);
  arr.push(node_4);
  return arr;
};

const createGuestSection = () => {
  createPostBtn.style.display = 'none';
  const arr = [];

  const node_1 = document.createElement('A');
  node_1.setAttribute('class', 'user-light');
  node_1.setAttribute('href', '/login');

  const node_2 = document.createElement('SPAN');
  node_2.setAttribute('class', 'username-light nav-links');
  node_1.appendChild(node_2);

  const node_3 = document.createTextNode((new String('login')));
  node_2.appendChild(node_3);

  const node_4 = document.createElement('A');
  node_4.setAttribute('class', 'logout-container-light');
  node_4.setAttribute('href', '/signup');

  const node_5 = document.createElement('SPAN');
  node_5.setAttribute('class', 'logout-light nav-links');
  node_4.appendChild(node_5);

  const node_6 = document.createTextNode((new String('sign up')));
  node_5.appendChild(node_6);
  arr.push(node_1);
  arr.push(node_4);
  return arr;
};

fetch('/isAuth', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

}).then((data) => data.json())
  .then((data) => {
    const {
      auth, img_url, id, username,
    } = data;
    if (auth) { // render user view
      createUserSection(img_url, id, username).forEach((ele) => {
        navRight.appendChild(ele);
      });
      fetchCategory('/authPosts');
    } else { // render guest view
      createGuestSection().forEach((ele) => {
        navRight.appendChild(ele);
      });
      fetchCategory('/posts');
    }
  })
  .catch((err) => { console.log(err); });
