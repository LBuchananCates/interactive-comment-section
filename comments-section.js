fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    const comments = json.comments;

    for (const comment of comments) {
      // create comment div
      const commentDiv = document.createElement("div");
      document.body.append(commentDiv);
      commentDiv.className = "comment-div";

      // add avatar
      const userAvatar = document.createElement("img");
      userAvatar.src = comment.user.image.png;
      commentDiv.append(userAvatar);

      // add username
      const userName = document.createElement("span");
      userName.textContent = comment.user.username;
      commentDiv.append(userName);
      userName.className = "username";

      // add post date
      const postDate = document.createElement("span");
      postDate.textContent = comment.createdAt;
      commentDiv.append(postDate);
      postDate.className = "post-date";

      // add comment
      const post = document.createElement("p");
      post.textContent = comment.content;
      commentDiv.append(post);
      post.className = "comment";

      // insert votes-div: upvotes, current votes, downvotes
      // VOTES CONTAINER
      const votesDiv = document.createElement("div");
      commentDiv.append(votesDiv);
      votesDiv.className = "votes";
      // 1. insert plus votes button WORKS
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";
      // 2. current votes default WORKS
      const currentVotes = document.createElement("span");
      currentVotes.textContent = comment.score;
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";

      // event listener for upvotes
      let currentScore = comment.score; // YES THIS WORKS
      plusVotes.addEventListener("click", function () {
        currentScore += 1;
        currentVotes.textContent = currentScore;
      });

      // 3. insert minus votes button
      const minusVotes = document.createElement("button");
      minusVotes.textContent = "-";
      votesDiv.append(minusVotes);
      minusVotes.className = "minus";
      // 3a. event listener for downvotes
      minusVotes.addEventListener("click", function () {
        currentScore -= 1;
        currentVotes.textContent = currentScore;
      });

      // reply container: arrow icon, reply button
      const replyContainer = document.createElement("div");
      commentDiv.append(replyContainer);
      replyContainer.className = "reply-container";
      // 1. arrow icon
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply.svg";
      replyContainer.append(arrowIcon);
      arrowIcon.className = "arrow-icon";
      // 2. reply button
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      replyContainer.append(replyButton);
      replyButton.className = "reply-button";

      // add event listener to append reply to reply container
      replyButton.addEventListener("click", function () {
        // IF ".direct-reply-container" DOESN'T exist, ELSE:
        const drc = document.querySelector(".direct-reply-container");
        if (!drc) {
          const directReplyContainer = document.createElement("div");
          commentDiv.append(directReplyContainer);
          directReplyContainer.className = "direct-reply-container";
          const currentUserAvatar = document.createElement("img");
          currentUserAvatar.src = "./images/avatars/image-juliusomo.png";
          directReplyContainer.append(currentUserAvatar);
          currentUserAvatar.className = "current-user-avatar";
          const inputText = document.createElement("input");
          directReplyContainer.append(inputText);
          inputText.className = "input-text";
          const submitButton = document.createElement("button");
          submitButton.textContent = "REPLY";
          directReplyContainer.append(submitButton);
          submitButton.className = "submit-button";
        }
        // currentUser avatar + input + reply button that appends innerHTML to comment
      });
    }

    const replies = json.comments[1].replies;

    for (const reply of replies) {
      // add reply to reply div
      const replyDiv = document.createElement("div");
      document.body.append(replyDiv);
      replyDiv.className = "reply-div";

      // add avatar to reply div
      const userAvatar = document.createElement("img");
      userAvatar.src = reply.user.image.png;
      replyDiv.append(userAvatar);

      // add username to reply div
      const userName = document.createElement("span");
      userName.textContent = reply.user.username;
      replyDiv.append(userName);
      userName.className = "username";

      // add post date to reply div
      const postDate = document.createElement("span");
      postDate.textContent = reply.createdAt;
      replyDiv.append(postDate);
      postDate.className = "post-date";

      // add comment to reply div
      const post = document.createElement("p");
      post.textContent = reply.content;
      replyDiv.append(post);
      post.className = "comment"; // THIS WORKED YAY //

      // insert current score div: plus votes, current votes, minus votes
      const votesDiv = document.createElement("div");
      replyDiv.append(votesDiv);
      votesDiv.className = "votes";
      // 1. insert plus votes button to votes div
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";

      let currentScore = reply.score; // YES THIS WORKS
      plusVotes.addEventListener("click", function () {
        currentScore += 1;
        currentVotes.textContent = currentScore;
      });

      // 2. current votes default to votes div
      const currentVotes = document.createElement("span");
      currentVotes.textContent = replies[0].score; //check on this!!!
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";
      // 3. insert minus votes button to votes div
      const minusVotes = document.createElement("button");
      minusVotes.textContent = "-";
      votesDiv.append(minusVotes);
      minusVotes.className = "minus";

      minusVotes.addEventListener("click", function () {
        currentScore -= 1;
        currentVotes.textContent = currentScore;
      });

      // container: arrow icon, reply button
      const replyContainer = document.createElement("div");
      replyDiv.append(replyContainer);
      replyContainer.className = "reply-container";
      // add arrow icon to reply container div
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply.svg";
      replyContainer.append(arrowIcon);
      arrowIcon.className = "arrow-icon";
      // add reply button to reply container div
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      replyContainer.append(replyButton);
      replyButton.className = "reply-button";

      // EDITABLE COMMENT DIV CONTAINER APPENDED
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

          //NEW COMMENT APPENDED TO EXISTING COMMENTS WORKS
          submitButton.addEventListener("click", function () {
            // create new comment container div
            const newCommentContainer = document.createElement("div");
            document.body.append(newCommentContainer);
            newCommentContainer.className = "new-comment-container";

            // append user avatar julius WORKS
            const userAvatar = document.createElement("img");
            userAvatar.src = "./images/avatars/image-juliusomo.png"; // DONT CHANGE
            newCommentContainer.append(userAvatar);

            // add username julius
            const userName = document.createElement("span");
            userName.textContent = replies[1].user.username; // FIXED IT
            newCommentContainer.append(userName);
            userName.className = "username";

            // add post date
            const postDate = document.createElement("span");
            postDate.textContent = reply.createdAt;
            newCommentContainer.append(postDate);
            postDate.className = "post-date";

            // insert new comment
            const newPost = document.createElement("p");
            newPost.textContent = inputText.value;
            newCommentContainer.append(newPost);

            // votesDiv for reply container
            const votesDiv = document.createElement("span");
            newCommentContainer.append(votesDiv);
            votesDiv.className = "votes";

            // insert plus votes button to votes div
            const plusVotes = document.createElement("button");
            plusVotes.textContent = "+";
            votesDiv.append(plusVotes);
            plusVotes.className = "plus";

            // current votes default to votes div
            const currentVotes = document.createElement("span");
            currentVotes.textContent = comments[1].replies[0].score; //check on this!!!
            votesDiv.append(currentVotes);
            currentVotes.className = "current-votes";

            // insert minus votes button to votes div
            const minusVotes = document.createElement("button");
            minusVotes.textContent = "-";
            votesDiv.append(minusVotes);
            minusVotes.className = "minus";

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
      });
    }
  });
