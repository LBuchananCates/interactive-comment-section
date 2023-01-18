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
      const postDate = document.createElement("p");
      postDate.textContent = comment.createdAt;
      commentDiv.append(postDate);
      postDate.className = "post-date";

      // add comment
      const post = document.createElement("p");
      post.textContent = comment.content;
      commentDiv.append(post);
      post.className = "comment"; // THIS WORKED YAY //

      // add upvote and downvote (buttons???)

      // add arrow icon
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply.svg";
      commentDiv.append(arrowIcon);
      arrowIcon.className = "arrow-icon";

      // add reply button
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      commentDiv.append(replyButton);
      replyButton.className = "reply-button";

      // put everything inside comment div
      // for (const reply of replies) {
      //   // add reply comments
      //   const replyDiv = document.createElement("div");
      //   document.body.append(replyDiv);
      //   replyDiv.className = "reply-div";
      // }
    }
  });
