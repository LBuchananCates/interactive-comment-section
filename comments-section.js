// comment functions

function createCommentDiv() {
  const commentDiv = document.createElement("div");
  document.body.append(commentDiv);
  commentDiv.className = "comment-div";
  return commentDiv;
}

function createReplyDiv() {
  const replyDiv = document.createElement("div");
  document.body.append(replyDiv);
  replyDiv.className = "reply-div";
  return replyDiv;
}

function createAvatar(container, avatarUrl) {
  const userAvatar = document.createElement("img");
  userAvatar.src = avatarUrl;
  container.append(userAvatar);
  userAvatar.className = "user-avatar";
}

function createUsername(container, username) {
  const userName = document.createElement("span");
  userName.textContent = username;
  container.append(userName);
  userName.className = "username";
}

function createPostDate(container, createdAt) {
  const postDate = document.createElement("span");
  postDate.textContent = createdAt;
  container.append(postDate);
  postDate.className = "post-date";
}

function createComment(container, comment) {
  const postedComment = document.createElement("p");
  postedComment.textContent = comment;
  container.append(postedComment);
  postedComment.className = "posted-comment";
}

function createReply(container, reply) {
  const postedReply = document.createElement("p");
  postedReply.textContent = reply;
  container.append(postedReply);
  postedReply.className = "posted-reply";
}

function createVotesContainer(container, jsonComment) {
  // insert votes-div: upvotes, current votes, downvotes
  const votesDiv = document.createElement("div");
  container.append(votesDiv);
  votesDiv.className = "votes";
  // 1. insert plus votes button WORKS
  const plusVotes = document.createElement("button");
  plusVotes.textContent = "+";
  votesDiv.append(plusVotes);
  plusVotes.className = "plus";
  // 2. current votes default WORKS
  const currentVotes = document.createElement("span");
  currentVotes.textContent = jsonComment.score;
  votesDiv.append(currentVotes);
  currentVotes.className = "current-votes";
  // 3. insert minus votes button
  const minusVotes = document.createElement("button");
  minusVotes.textContent = "-";
  votesDiv.append(minusVotes);
  minusVotes.className = "minus";

  // event listener: UPVOTES & DOWNVOTES
  let currentScore = jsonComment.score; // YES THIS WORKS
  plusVotes.addEventListener("click", function () {
    currentScore += 1;
    currentVotes.textContent = currentScore;
  });
  minusVotes.addEventListener("click", function () {
    currentScore -= 1;
    currentVotes.textContent = currentScore;
  });
}

function createCommentReplyButtonContainer(container, currentUser) {
  // reply container: arrow icon, reply button
  const replyButtonContainer = document.createElement("div");
  container.append(replyButtonContainer);
  replyButtonContainer.className = "reply-button-container";
  // 1. arrow icon
  const arrowIcon = document.createElement("img");
  arrowIcon.src = "./images/icon-reply.svg";
  replyButtonContainer.append(arrowIcon);
  arrowIcon.className = "arrow-icon";
  // 2. reply button
  const replyButton = document.createElement("button");
  replyButton.textContent = "Reply";
  replyButtonContainer.append(replyButton);
  replyButton.className = "main-comment-reply-button";

  // event listener: CLICK REPLY BUTTON, DO THIS
  replyButton.addEventListener("click", function () {
    // when reply button clicked, create commentReplyDiv, append avatar, input, and submitbutton
    const CRD = document.querySelector(".comment-reply-div");
    if (!CRD) {
      const commentsReplyDiv = document.createElement("div");
      container.append(commentsReplyDiv);
      commentsReplyDiv.className = "comment-reply-div";

      // append currentUser avatar
      createAvatar(commentsReplyDiv, currentUser);

      // append input
      const input = document.createElement("input");
      commentsReplyDiv.append(input);
      input.className = "input-container";

      // append submitButton
      const inputReplyButton = document.createElement("button");
      inputReplyButton.textContent = "REPLY";
      commentsReplyDiv.append(inputReplyButton);
      inputReplyButton.className = "input-reply-button";
    }
  });
}

function createNewCommentContainer() {
  const newCommentContainer = document.createElement("div");
  document.body.append(newCommentContainer);
  newCommentContainer.className = "new-comment-container";
  return newCommentContainer;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    const comments = json.comments;
    const currentUser = json.currentUser;

    for (const comment of comments) {
      const commentDiv = createCommentDiv();
      createAvatar(commentDiv, comment.user.image.png);
      createUsername(commentDiv, comment.user.username);
      createPostDate(commentDiv, comment.createdAt);
      createComment(commentDiv, comment.content);
      createVotesContainer(commentDiv, comment);
      createCommentReplyButtonContainer(commentDiv, currentUser.image.png);
    }

    const replies = json.comments[1].replies;

    for (const reply of replies) {
      const replyDiv = createReplyDiv();
      createAvatar(replyDiv, reply.user.image.png);
      createUsername(replyDiv, reply.user.username);
      createPostDate(replyDiv, reply.createdAt);
      createReply(replyDiv, reply.content);
      createVotesContainer(replyDiv, reply);
      createCommentReplyButtonContainer(replyDiv, currentUser.image.png);

      // create new container for logged in user to add new comment
      // 1. create new comment container div
      const newCommentContainer = createNewCommentContainer();
      createAvatar(newCommentContainer, currentUser.image.png);
      // 1b. add input
      const createNewCommentInput = document.createElement("input");
      newCommentContainer.append(createNewCommentInput);
      createNewCommentInput.className = "new-comment-input";
      // 1c. add send button
      const createNewCommentSendButton = document.createElement("button");
      createNewCommentSendButton.textContent = "Send";
      newCommentContainer.append(createNewCommentSendButton);
      createNewCommentSendButton.className = "new-comment-send-button";

      // add brand new comment from logged in user

      // 2a. placeholder text in input
      // document.getElementsByClassName("new-comment-input")[0].placeholder =
      //   "Add new comment...";
    }

    // Add new comment
  });
