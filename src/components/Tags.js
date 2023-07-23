import '../styles/Tags.scss'

function Tags ({tags}) {
    console.log(tags)

    const displayTags = tags.map((tag, index) => (
      <div key={index} className='tag'>{tag}</div>
    ));
  
    return (
      <div className='tags'>
        {displayTags}
      </div>
    );
  };
         
   
export default Tags