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
      post.className = "comment"; // THIS WORKED YAY //

      // add upvote and downvote (buttons???)
      // add event listener for every time click up/downvotes, add 1

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
    }

    // replies is iterable under username maxblagun
    const replies = json.comments[1].replies; // console logged; is undefined but working

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
      const postDate = document.createElement("p");
      postDate.textContent = reply.createdAt;
      replyDiv.append(postDate);
      postDate.className = "post-date";

      // add comment
      const post = document.createElement("p");
      post.textContent = reply.content;
      replyDiv.append(post);
      post.className = "comment"; // THIS WORKED YAY //
    }
  });
