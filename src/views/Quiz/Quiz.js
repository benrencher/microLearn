"ust strict"
import "./Quiz.css";
function Quiz() {
  const description = "This here is a description";
  const resourceData = [
    {
      url: "https://google.com",
      text: "Google"
    }
  ]
  const resources = resourceData.map((resource, index) => 
    <div key={index}>
      <a href={resource.url} target="_blank">{resource.text}</a>
    </div>
  );
  return(
    <div className="Quiz">
      <h2 className="QuizQuestionTitle">Question title</h2>
      <h2 className="QuizTopicTitle"><span className="QuizTopic">Topic:</span> Topic Title</h2>
      <div className="QuizDescriptionWrapper greyBackground">
        <p>{description}</p>
      </div>
      <div>
        <h2 className="RelatedResourcesTitle">Related resources</h2>
        <div className="RelatedResourcesWrapper greyBackground">
          <div>{resources}</div>
        </div>
      </div>
    </div>
  )
}

export default Quiz;