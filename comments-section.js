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

      // add event listener for every time click up/downvotes, add 1
      // function commentReply() {
      //   const editComment = document.getElementsByClassName("reply-button");
      //   editComment.addEventListener("click");
      // }

      // insert score button
      const votesDiv = document.createElement("div");
      commentDiv.append(votesDiv);
      votesDiv.className = "votes";

      // insert minus votes button
      const minusVotes = document.createElement("button");
      minusVotes.textContent = "-";
      votesDiv.append(minusVotes);
      minusVotes.className = "minus";

      // current votes default
      let currentVotes = document.createElement("span");
      currentVotes.textContent = "12";
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";

      // insert plus votes button
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";

      //add event listener
      const plusButton = document.querySelector(".plus");
      const minusButton = document.querySelector(".minus");
      let currentScore = 0;
      plusButton.addEventListener("click", function () {
        currentScore += 1;
        currentVotes.textContent = currentScore;
      });

      // container below in reply div
      const replyContainer = document.createElement("div");
      commentDiv.append(replyContainer);
      replyContainer.className = "reply-container";

      // arrow icon
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply.svg";
      replyContainer.append(arrowIcon);
      arrowIcon.className = "arrow-icon";

      // reply button
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      replyContainer.append(replyButton);
      replyButton.className = "reply-button";
      // add event listener to append reply to reply container
    }

    const replies = json.comments[1].replies;

    for (const reply of replies) {
      // add reply comments
      const replyDiv = document.createElement("div");
      document.body.append(replyDiv); // addressing commentDiv //
      replyDiv.className = "reply-div";

      // add avatar
      const userAvatar = document.createElement("img");
      userAvatar.src = reply.user.image.png;
      replyDiv.append(userAvatar);

      // add username
      const userName = document.createElement("span");
      userName.textContent = reply.user.username;
      replyDiv.append(userName);
      userName.className = "username";

      // add post date
      const postDate = document.createElement("span");
      postDate.textContent = reply.createdAt;
      replyDiv.append(postDate);
      postDate.className = "post-date";

      // add comment
      const post = document.createElement("p");
      post.textContent = reply.content;
      replyDiv.append(post);
      post.className = "comment"; // THIS WORKED YAY //

      // insert score button
      const votesDiv = document.createElement("div");
      replyDiv.append(votesDiv);
      votesDiv.className = "votes";

      // insert minus votes button
      const minusVotes = document.createElement("button");
      minusVotes.textContent = "-";
      votesDiv.append(minusVotes);
      minusVotes.className = "minus";

      // current votes default
      let currentVotes = document.createElement("span");
      currentVotes.textContent = "12";
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";

      // insert plus votes button
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";

      // container below in reply div
      const replyContainer = document.createElement("div");
      replyDiv.append(replyContainer);
      replyContainer.className = "reply-container";

      // add arrow icon
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply.svg";
      replyContainer.append(arrowIcon);
      arrowIcon.className = "arrow-icon";

      // add reply button
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      replyContainer.append(replyButton);
      replyButton.className = "reply-button";
    }
  });
