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

function createMention(container, replyingTo) {
  const mentionUsername = document.createElement("div");
  mentionUsername.textContent = replyingTo;
  container.append(mentionUsername);
  mentionUsername.className = "mention-username";
} // work on this after

function createComment(container, comment) {
  const postedComment = document.createElement("p");
  postedComment.textContent = comment;
  container.append(postedComment);
  postedComment.className = "posted-comment";
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

function createInput(container) {
  const input = document.createElement("input");
  container.append(input);
  input.className = "input";
}

function createCommentReplyButtonContainer(container, userImg) {
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
  // reply button event listener
  replyButton.addEventListener("click", function () {
    const CRD = document.querySelector(".comment-reply-div");
    if (!CRD) {
      const commentsReplyDiv = document.createElement("div");
      container.append(commentsReplyDiv);
      commentsReplyDiv.className = "comment-reply-div";
      // create avatar
      createAvatar(commentsReplyDiv, userImg);
      // create input
      createInput(commentsReplyDiv);
      // create inputReplyButton
      const inputReplyButton = document.createElement("button");
      inputReplyButton.textContent = "REPLY";
      commentsReplyDiv.append(inputReplyButton);
      inputReplyButton.className = "input-reply-button";

      // inputReplyButton event listener
      inputReplyButton.addEventListener("click", function () {
        commentsReplyDiv.remove(); //this works
        const postedCommentReplyContainer = document.querySelector(
          ".posted-comment-reply-container"
        ); //this works

        createPostedCommentReplyContainer(); //this works
        createAvatar(postedCommentReplyContainer, userImg);
        createUsername(postedCommentReplyContainer, currentUser.username);
        createComment(postedCommentReplyContainer, input.value);
        createVotesContainer(postedCommentReplyContainer, "0");
      });
    }
  });
}

function createReply(container, reply) {
  const postedReply = document.createElement("p");
  postedReply.textContent = reply;
  container.append(postedReply);
  postedReply.className = "posted-reply";
}

function createNewCommentContainer() {
  const newCommentContainer = document.createElement("div");
  document.body.append(newCommentContainer);
  newCommentContainer.className = "new-comment-container";
  return newCommentContainer;
}

function createPostedCommentReplyContainer() {
  const postedCommentReplyContainer = document.createElement("div");
  document.body.append(postedCommentReplyContainer);
  postedCommentReplyContainer.className = "posted-comment-reply-container";
  return postedCommentReplyContainer;
}

function createPostedNewCommentContainer() {
  const postedNewCommentContainer = document.createElement("div");
  document.body.append(postedNewCommentContainer);
  postedNewCommentContainer.className = "posted-new-comment-container";
  return postedNewCommentContainer;
}

function createDeleteAndEditButtons(container) {
  const deleteAndEditButtonContainer = document.createElement("div");
  container.append(deleteAndEditButtonContainer);
  deleteAndEditButtonContainer.className = "delete-and-edit-button-container";

  const deleteButtonIcon = document.createElement("img");
  deleteButtonIcon.src = "./images/icon-delete.svg";
  deleteAndEditButtonContainer.append(deleteButtonIcon);
  deleteButtonIcon.className = "delete-button-icon";

  const deleteButton = document.createElement("button");
  deleteAndEditButtonContainer.append(deleteButton);
  deleteButton.textContent = "delete";
  deleteButton.className = "delete-button";

  deleteButton.addEventListener("click", function () {
    container.remove(); // this works!
    // newCommentContainer should show back up
  });

  const editButtonIcon = document.createElement("img");
  editButtonIcon.src = "./images/icon-edit.svg";
  deleteAndEditButtonContainer.append(editButtonIcon);
  editButtonIcon.className = "edit-button-icon";

  const editButton = document.createElement("button");
  deleteAndEditButtonContainer.append(editButton);
  editButton.textContent = "edit";
  editButton.className = "edit-button";
  editButton.setAttribute("onclick", "alert('you have clicked edit button')");

  editButton.addEventListener("click", function () {
    const postedNewCommentContainer = document.querySelector(
      ".posted-new-comment-container"
    ); // find the correct method for editing
    postedNewCommentContainer.style.display = none; //when i click edit, it responds
  });
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
      createMention(replyDiv, reply.replyingTo);
      createReply(replyDiv, reply.content);
      createVotesContainer(replyDiv, reply);
      createCommentReplyButtonContainer(replyDiv, currentUser.image.png);
    }

    // create new container for logged in user to add new comment
    const newCommentContainer = createNewCommentContainer();
    createAvatar(newCommentContainer, currentUser.image.png);

    const newCommentInput = document.createElement("input");
    newCommentContainer.append(newCommentInput);
    newCommentInput.className = "new-comment-input";
    document.getElementsByClassName("new-comment-input")[0].placeholder =
      "Add new comment...";

    const newCommentSendButton = document.createElement("button");
    newCommentSendButton.textContent = "Send";
    newCommentContainer.append(newCommentSendButton);
    newCommentSendButton.className = "new-comment-send-button";
    newCommentSendButton.addEventListener("click", function () {
      newCommentContainer.remove();
      // const replyDiv = document.querySelector(".reply-div");
      // replyDiv.insertBefore(newCommentContainer, replyDiv);
      const postedNewCommentContainer = createPostedNewCommentContainer();
      createAvatar(postedNewCommentContainer, currentUser.image.png);
      createUsername(postedNewCommentContainer, currentUser.username);
      createComment(postedNewCommentContainer, newCommentInput.value);
      createVotesContainer(postedNewCommentContainer, "1"); // let votes = 0
      createDeleteAndEditButtons(postedNewCommentContainer);
    });
  });
