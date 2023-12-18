
const Property = ({image}) => {
    const {id, imageUrl} = image || {}
    const cardStyle = {
        margin: '0 10px', 
        textAlign: 'center'
      };
    
    return (
        <div className='card' style={cardStyle}>
        <img className="h-[200px]" src={imageUrl} alt='Property 1' />
        <h2>Visit</h2>
      </div>
    );
};

export default Property;