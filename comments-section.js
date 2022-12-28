fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    // Create new comment & place inside comment-container
    const commentDiv = document.createElement("div");

    // create parag. tag & place inside comment-container
    const commentParagraph = document.createElement("p");
    const newComment = document.createTextNode(json.comments[0].content);
    commentParagraph.appendChild(newComment);

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
    commentContainer.append(commentParagraph);
    commentContainer.append(upvoteButton);
    commentContainer.append(downvoteButton);
    commentContainer.append(replyButton);
  });
