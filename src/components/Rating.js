import starOrange from '../assets/starOrange.jpg'
import starGris from '../assets/starGris.jpg'



function Rating({rating}) {
    console.log(rating);
	const range = [1, 2, 3, 4, 5]
   
	const scaleType =
		rating === 'Orange' ? (
			<img src={starGris} alt='star orange' />
		) : (
			<img src={starOrange} alt='star gris' />
		);

        const rest=6-rating;
        console.log (rest);

        const TypeScale =
		rest === 'Orange' ? (
			<img src={starOrange} alt='star orange' />
		) : (
			<img src={starGris} alt='star gris' />
		);

       
	return (
		<div>
			{range.map((rangeStar) =>
				rating >= rangeStar ? (
					<span key={rangeStar.toString()}>{scaleType} </span>
				) : null
			)}

{range.map((rangeSta) =>
				rest > rangeSta ? (
					<span key={rangeSta.toString()}>{TypeScale} </span>
				) : null
			)}
		</div>
	)
}


export default Rating