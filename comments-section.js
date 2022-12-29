fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    // Create new comment & place inside comment-container
    const commentDiv = document.createElement("div");

    // how long ago comment was posted
    const commentPostDate = document.createElement("span");
    const postDate = document.createTextNode(json.comments[0].createdAt);
    commentPostDate.appendChild(postDate);

    // create parag. tag & place inside comment-container
    const commentParagraph1 = document.createElement("p");
    const newComment1 = document.createTextNode(json.comments[0].content);
    commentParagraph1.appendChild(newComment1);

    // create second parag. tag & place inside comment-container
    const commentParagraph2 = document.createElement("p");
    const newComment2 = document.createTextNode(json.comments[1].content);
    commentParagraph2.appendChild(newComment2);

    // create vote buttons & place inside comment-container
    const upvoteButton = document.createElement("button");
    const plusSign = document.createTextNode("+");
    upvoteButton.appendChild(plusSign);

    const downvoteButton = document.createElement("button");
    const minusSign = document.createTextNode("-");
    downvoteButton.appendChild(minusSign);

    //create reply button & place inside comment-container
    const replyButton = document.createElement("button");
    const reply = document.createTextNode("Reply");
    replyButton.appendChild(reply);

    // Put comment in container
    const commentContainer = document.querySelector(".comment-container");
    commentContainer.append(commentDiv);
    commentContainer.append(commentParagraph1);
    commentContainer.append(commentParagraph2);
    commentContainer.append(upvoteButton);
    commentContainer.append(downvoteButton);
    commentContainer.append(replyButton);

    // loop over array of comments
    const comments = [0, 1, 2];
    for (let comment of comments) {
      comment += 1;
      console.log(comment);
    }

    // TODO: Style comment and buttons in them
  });
