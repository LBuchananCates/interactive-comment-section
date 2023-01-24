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
      const currentVotes = document.createElement("span");
      currentVotes.textContent = comment.score;
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";

      // insert plus votes button WORKS
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";

      //add event listener
      const plusButton = document.querySelector(".plus");
      plusButton.addEventListener("click", function () {
        currentScore += 1;
        currentVotes.textContent = currentScore;
      });

      const minusButton = document.querySelector(".minus");
      minusButton.addEventListener("click", function () {
        currentScore -= 1; // ensure it doesn't go negative
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

      // add event listener to append reply to reply container STILL WORKING ON THIS
      replyButton.addEventListener("click", function () {
        //only ONCE
        const inputText = document.createElement("input");
        replyContainer.append(inputText);
      });
    }

    const replies = json.comments[1].replies;

    for (const reply of replies) {
      // add reply comments
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

      // insert score button to reply div
      const votesDiv = document.createElement("div");
      replyDiv.append(votesDiv);
      votesDiv.className = "votes";

      // insert minus votes button to votes div
      const minusVotes = document.createElement("button");
      minusVotes.textContent = "-";
      votesDiv.append(minusVotes);
      minusVotes.className = "minus";

      // current votes default to votes div
      const currentVotes = document.createElement("span");
      currentVotes.textContent = comments[1].replies[1].score; //check on this!!!
      votesDiv.append(currentVotes);
      currentVotes.className = "current-votes";

      // insert plus votes button to votes div
      const plusVotes = document.createElement("button");
      plusVotes.textContent = "+";
      votesDiv.append(plusVotes);
      plusVotes.className = "plus";

      // container below in reply div
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
    }
  });
