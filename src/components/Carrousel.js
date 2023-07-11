import ImageSlider from "./ImageSlider";



function Carrousel ({pictures}) {
    console.log(pictures)
    const slides=pictures.map((picture)=>({
        url:picture,
        title:'room'
    }))


const containerStyles = {
width:"1240px",
height:"415px",
margin: "0 auto",
backgroundColor:"blue",
border:"4px solid black"
};

return (
<div>
<div style={containerStyles}> 
<ImageSlider slides ={slides} />
</div>
</div>
)
}


export default Carrousel;