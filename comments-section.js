function createCommentDiv() {
  const commentDiv = document.createElement("div");
  document.body.append(commentDiv);
  commentDiv.className = "comment-div";
  return commentDiv;
}

function createAvatar(container, avatarUrl) {
  const userAvatar = document.createElement("img");
  userAvatar.src = avatarUrl;
  container.append(userAvatar);
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
  const post = document.createElement("p");
  post.textContent = comment;
  container.append(post);
  post.className = "comment";
}

function createVoteContainer(container, jsonComment) {
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

  // event listener for upvotes
  let currentScore = jsonComment.score; // YES THIS WORKS
  plusVotes.addEventListener("click", function () {
    currentScore += 1;
    currentVotes.textContent = currentScore;
  });

  // 3a. event listener for downvotes
  minusVotes.addEventListener("click", function () {
    currentScore -= 1;
    currentVotes.textContent = currentScore;
  });
}

function createReplyButton(container, currentUser) {
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
  replyButton.className = "reply-button";

  replyButton.addEventListener("click", function () {
    const drc = document.querySelector(".direct-reply-container");

    if (!drc) {
      // create reply container
      const directReplyContainer = document.createElement("div");
      container.append(directReplyContainer);
      directReplyContainer.className = "direct-reply-container";

      // create user avatar
      const currentUserAvatar = document.createElement("img");
      currentUserAvatar.src = currentUser.image.png;
      directReplyContainer.append(currentUserAvatar);
      currentUserAvatar.className = "current-user-avatar";

      // create input for posting replies
      const inputText = document.createElement("input");
      directReplyContainer.append(inputText);
      inputText.className = "input-text";

      // create button for posting replies
      const submitReplyButton = document.createElement("button");
      submitReplyButton.textContent = "REPLY";
      directReplyContainer.append(submitReplyButton);
      submitReplyButton.className = "submit-button";

      // submitting comment by clicking reply and it shows up at bottom of page
      submitReplyButton.addEventListener("click", function () {
        // create new comment container div
        const newCommentContainer = document.createElement("div");
        document.body.append(newCommentContainer);
        newCommentContainer.className = "new-comment-container";

        createAvatar(newCommentContainer, currentUser.image.png);
        createUsername(newCommentContainer, currentUser);
        createPostDate(newCommentContainer, currentUser.createdAt);

        // insert new comment FIX THIS
        const newPost = document.createElement("p");
        newPost.textContent = inputText.value;
        newCommentContainer.append(newPost);

        createVoteContainer(newCommentContainer, comments[1].replies[0].score);

        // add arrow icon to reply container div
        const arrowIcon = document.createElement("img");
        arrowIcon.src = "./images/icon-reply.svg";
        newCommentContainer.append(arrowIcon);
        arrowIcon.className = "arrow-icon";

        // add reply button to reply container div
        const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        newCommentContainer.append(replyButton);
        replyButton.className = "reply-button";
      });
    }
    // currentUser avatar + input + reply button that appends innerHTML to comment
  });
}

function createReplyDiv() {
  // add reply to reply div
  const replyDiv = document.createElement("div");
  document.body.append(replyDiv);
  replyDiv.className = "reply-div";
  return replyDiv;
}

function createReplyButton(container) {
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
  replyButton.className = "reply-button";
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
      createVoteContainer(commentDiv, comment);
      createReplyButton(commentDiv, currentUser);

      // clicking reply to add comment before submitting
    }

    const replies = json.comments[1].replies;

    for (const reply of replies) {
      const replyDiv = createReplyDiv();
      createAvatar(replyDiv, reply.user.image.png);
      createUsername(replyDiv, reply.user.username);

      // add "you" badge next to logged in user
      const youBadge = document.createElement("span");
      youBadge.textContent = "you";
      replyDiv.append(youBadge);
      youBadge.className = "you-badge";

      createPostDate(replyDiv, reply.createdAt);
      createComment(replyDiv, reply.content);
      createVoteContainer(replyDiv, reply);
      createDeleteIconAndButton(replyDiv);

      // insert container for delete and edit icons and buttons
      const deleteAndEditButtonsContainer = document.createElement("div");
      replyDiv.append(deleteAndEditButtonsContainer);
      deleteAndEditButtonsContainer.className = "delete-edit-buttons-container";
      // insert delete icon & button
      const deleteButtonIcon = document.createElement("img");
      deleteButtonIcon.src = "./images/icon-delete.svg";
      deleteAndEditButtonsContainer.append(deleteButtonIcon);
      deleteButtonIcon.className = "delete-button-icon";
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteAndEditButtonsContainer.append(deleteButton);
      deleteButton.className = "delete-button";

      // delete functionality
      deleteButton.addEventListener("click", function () {});

      // insert edit buttons
      const editButtonIcon = document.createElement("img");
      editButtonIcon.src = "./images/icon-edit.svg";
      deleteAndEditButtonsContainer.append(editButtonIcon);
      editButtonIcon.className = "edit-button-icon";
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      deleteAndEditButtonsContainer.append(editButton);
      editButton.className = "edit-button";

      // edit functionality
      editButton.addEventListener("click", function () {});

      createReplyButton(replyButtonContainer);

      // EDITABLE COMMENT DIV CONTAINER APPENDED
      // define reply button below!!! //
      replyButton.addEventListener("click", function () {
        const drc = document.querySelector(".direct-reply-container");
        if (!drc) {
          const directReplyContainer = document.createElement("div");
          replyDiv.append(directReplyContainer);
          directReplyContainer.className = "direct-reply-container";
          const currentUserAvatar = document.createElement("img");
          currentUserAvatar.src = "./images/avatars/image-juliusomo.png";
          directReplyContainer.append(currentUserAvatar);
          currentUserAvatar.className = "current-user-avatar";
          const inputText = document.createElement("input");
          directReplyContainer.append(inputText);
          const submitButton = document.createElement("button");
          submitButton.textContent = "REPLY";
          directReplyContainer.append(submitButton);
          submitButton.className = "submit-button";

          function submit() {
            // create new comment container div
            const newCommentContainer = document.createElement("div");
            document.body.append(newCommentContainer);
            newCommentContainer.className = "new-comment-container";

            // append user avatar julius WORKS
            createAvatar(newCommentContainer, currentUser.image.png);
            createUsername(newCommentContainer, currentUser.username);
            createPostDate(newCommentContainer, reply.createdAt);
            createComment(newCommentContainer, inputText.value);
            createVoteContainer(
              newCommentContainer,
              comments[1].replies[0].score
            );
            createReplyButton(newCommentContainer);

            // create delete functionality for logged in user (hint: element.remove onclick event)
          }

          //NEW COMMENT APPENDED TO EXISTING COMMENTS WORKS
          // submitButton.addEventListener("click", submit);
        }
      });
    }

    // // create new container for logged in user to add new comment
    // const addNewCommentContainer = document.createElement("div");
    // document.body.append(addNewCommentContainer);
    // addNewCommentContainer.className = "add-new-comment-container";

    // // 1. add logged in user avatar
    // createAvatar(addNewCommentContainer, currentUser.image.png);

    // // 2. add input
    // const addNewComment = document.createElement("input");
    // addNewCommentContainer.append(addNewComment);
    // addNewComment.className = "add-new-comment";

    // // 2a. placeholder text in input
    // document.getElementsByClassName("add-new-comment")[0].placeholder =
    //   "Add new comment...";

    // // 3. send button
    // const sendButton = document.createElement("button");
    // sendButton.textContent = "SEND";
    // addNewCommentContainer.append(sendButton);
    // sendButton.className = "send-button";

    // // 4. functionality of send button
    // sendButton.addEventListener("click", function () {});
  });
