fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    // Create new comment & place inside comment-container
    const commentDiv = document.createElement("div");

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

    // const totalVotes = document.createElement("span");
    // const numVotes = document.createTextNode("12");
    // totalVotes.appendChild(numVotes); THIS MIGHT BE COMPLETELY WRONG

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

    const comments = json.comments;

    // // loop over array of comments
    for (const comment of comments) {
      // console.log(comment.createdAt);
      // create paragraph element
      const createdAt = document.createElement("p");
      // put createdAt inside paragraph
      const postDate = document.createTextNode(comment.createdAt);

      // put string into para
      createdAt.appendChild(postDate);
      console.log(createdAt);
      // append to ctainer
      commentContainer.append(createdAt);
    }

    // TODO: Style comment and buttons in them

    // provide starting "score" for up and downvotes
  });
