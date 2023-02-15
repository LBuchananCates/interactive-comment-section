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
  const mentionUsername = document.createElement("span");
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

function createNewVotesContainer(container) {
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
  currentVotes.textContent = "1";
  votesDiv.append(currentVotes);
  currentVotes.className = "current-votes";

  // 3. insert minus votes button
  const minusVotes = document.createElement("button");
  minusVotes.textContent = "-";
  votesDiv.append(minusVotes);
  minusVotes.className = "minus";

  // event listener: UPVOTES & DOWNVOTES
  let currentScore = 1; // YES THIS WORKS
  plusVotes.addEventListener("click", function () {
    currentScore += 1;
    currentVotes.textContent = currentScore;
  });
  minusVotes.addEventListener("click", function () {
    currentScore -= 1;
    currentVotes.textContent = currentScore;
  });
} // THIS WORKS

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

  const arrowIcon = document.createElement("img");
  arrowIcon.src = "./images/icon-reply.svg";
  replyButtonContainer.append(arrowIcon);
  arrowIcon.className = "arrow-icon";

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

      inputReplyButton.addEventListener("click", function () {
        const postedCommentReplyContainer = document.querySelector(
          ".posted-comment-reply-container"
        ); //this works
        commentsReplyDiv.remove(); //this works

        const commentDiv = document.querySelector(".comment-div");
        createPostedCommentReplyContainer(commentDiv); //this works, but only on first comment-div

        const currentUser = json.currentUser;
        createAvatar(postedCommentReplyContainer, currentUser.image.png); // use json file info
        createUsername(postedCommentReplyContainer, currentUser.username); // use json file info

        const input = document.querySelector(".input");
        createComment(postedCommentReplyContainer, input.value); // error in console

        createNewVotesContainer(postedCommentReplyContainer, "0");
      });
    }
  });
}

function createPostedCommentReplyContainer(container) {
  const postedCommentReplyContainer = document.createElement("div");
  container.append(postedCommentReplyContainer);
  postedCommentReplyContainer.className = "posted-comment-reply-container";
  return postedCommentReplyContainer;
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

function createPostedNewCommentContainer() {
  const postedNewCommentContainer = document.createElement("div");
  const newCommentContainer = document.querySelector(".new-comment-container");
  // put new comment above container
  newCommentContainer.insertAdjacentElement(
    "beforebegin",
    postedNewCommentContainer
  );
  postedNewCommentContainer.className = "posted-new-comment-container";
  return postedNewCommentContainer;
} //DONE

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
    const deleteModalDiv = document.createElement("div");
    document.body.append(deleteModalDiv);
    deleteModalDiv.className = "delete-modal-div";

    const deleteModalHeader = document.createElement("h1");
    deleteModalHeader.textContent = "Delete comment";
    deleteModalDiv.append(deleteModalHeader);
    deleteModalHeader.className = "delete-modal-header";

    const deleteModalText = document.createElement("p");
    deleteModalText.textContent =
      "Are you sure you want to delete this comment? This will remove the comment and can't be undone.";
    deleteModalDiv.append(deleteModalText);
    deleteModalText.className = "delete-modal-text";

    const deleteModalCancelButton = document.createElement("button");
    deleteModalCancelButton.textContent = "No, cancel";
    deleteModalDiv.append(deleteModalCancelButton);
    deleteModalCancelButton.className = "delete-modal-cancel-button";

    const deleteModalDeleteButton = document.createElement("button");
    deleteModalDeleteButton.textContent = "Yes, delete";
    deleteModalDiv.append(deleteModalDeleteButton);
    deleteModalDeleteButton.className = "delete-modal-delete-button";

    deleteModalDeleteButton.addEventListener("click", function () {
      container.remove(); // this works!
      deleteModalDiv.remove();
    });
  });

  const editButtonIcon = document.createElement("img");
  editButtonIcon.src = "./images/icon-edit.svg";
  deleteAndEditButtonContainer.append(editButtonIcon);
  editButtonIcon.className = "edit-button-icon";

  const editButton = document.createElement("button");
  deleteAndEditButtonContainer.append(editButton);
  editButton.textContent = "edit";
  editButton.className = "edit-button";

  editButton.addEventListener("click", function () {
    const postedComment = document.querySelector(".posted-comment");
    postedComment.value;
  });
}

function createYouBadge(container) {
  const youBadge = document.createElement("span");
  container.append(youBadge);
  youBadge.textContent = "you";
  youBadge.className = "you-badge";
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

      for (const reply of comment.replies) {
        const replyDiv = createReplyDiv();
        createAvatar(replyDiv, reply.user.image.png);
        createUsername(replyDiv, reply.user.username);
        // if currentUser posts a reply, youBadge displays
        const loggedInUser = currentUser.username;
        if (loggedInUser === reply.user.username) {
          const youBadge = document.querySelector(".you-badge");
          createYouBadge(replyDiv);
          replyDiv.insertAdjacentHTML("afterbegin", youBadge);
        }
        createPostDate(replyDiv, reply.createdAt);
        createMention(replyDiv, reply.replyingTo);
        createReply(replyDiv, reply.content);
        createVotesContainer(replyDiv, reply);
        createCommentReplyButtonContainer(replyDiv, currentUser.image.png);
      }
    }

    // "Add new comment...." DONE
    const newCommentContainer = createNewCommentContainer();
    createAvatar(newCommentContainer, currentUser.image.png);

    // Add new comment: input, placeholder text DONE
    const newCommentInput = document.createElement("input");
    newCommentContainer.append(newCommentInput);
    newCommentInput.className = "new-comment-input";
    document.getElementsByClassName("new-comment-input")[0].placeholder =
      "Add new comment...";

    // Add new comment: send button DONE
    const newCommentSendButton = document.createElement("button");
    newCommentSendButton.textContent = "Send";
    newCommentContainer.append(newCommentSendButton);
    newCommentSendButton.className = "new-comment-send-button";

    // Add new comment: send button event listener DONE
    newCommentSendButton.addEventListener("click", function () {
      const postedNewCommentContainer = createPostedNewCommentContainer();
      // append avatar
      createAvatar(postedNewCommentContainer, currentUser.image.png);
      // append username
      createUsername(postedNewCommentContainer, currentUser.username);
      // if currentUser posts a reply, youBadge displays
      const loggedInUser = currentUser.username;
      if (loggedInUser === currentUser.username) {
        // fix this above
        const youBadge = document.querySelector(".you-badge");
        createYouBadge(postedNewCommentContainer);
        postedNewCommentContainer.insertAdjacentHTML("afterbegin", youBadge);
      }
      createComment(postedNewCommentContainer, newCommentInput.value);
      createNewVotesContainer(postedNewCommentContainer); // let votes = 1
      createDeleteAndEditButtons(postedNewCommentContainer);
      // clears input value
      if (newCommentInput.value != "") {
        newCommentInput.value = "";
      }
    });
  });
