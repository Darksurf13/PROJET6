import ImageSlider from "./ImageSlider";

function Carrousel ({pictures}) {
    console.log(pictures.length)
    const slides=pictures.map((picture)=>({
        url:picture,
       // title:'room',
    }
    )
    )

    const totalImage= pictures.length;
    
const containerStyles = {
width:"1240px",
height:"415px",
margin: "0 auto",
/*border:"4px solid black"*/
};

return (
<div>
<div style={containerStyles}> 
<ImageSlider slides ={slides}
             totalImage= {totalImage} />
</div>
</div>
)
}


export default Carrousel;