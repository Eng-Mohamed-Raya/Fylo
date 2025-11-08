function FeatureBox ({img, title, desc}) {
    return ( 
        <div className="element-center flex-col text-center gap-2.5 w-[500px] max-w-[300px] mx-auto">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}

export default FeatureBox;