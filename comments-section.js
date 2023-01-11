fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    const comments = json.comments;

    for (const comment of comments) {
      // create comment div
      const commentDiv = document.createElement("div");
      document.body.append(commentDiv);

      // add avatar
      const userAvatar = document.createElement("img");
      userAvatar.src = comment.user.image.png;
      commentDiv.append(userAvatar);

      // add username
      const userName = document.createElement("span");
      userName.textContent = comment.user.username;
      commentDiv.append(userName);

      // add post date
      const postDate = document.createElement("p");
      postDate.textContent = comment.createdAt;
      commentDiv.append(postDate);

      // add comment
      const post = document.createElement("p");
      post.textContent = comment.content;
      commentDiv.append(post);

      // add upvote and downvote

      // add arrow icon
      const arrowIcon = document.createElement("img");
      arrowIcon.src = "./images/icon-reply";
      commentDiv.append(arrowIcon);

      // add reply button
      const replyButton = document.createElement("button");
      replyButton.textContent = "Reply";
      commentDiv.append(replyButton);

      // put everything inside comment div
    }
  });
