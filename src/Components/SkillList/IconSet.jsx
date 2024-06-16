const IconSet = ({Icon, Name}) => {
    return (
        <div className="flex items-center gap-3">
            {Icon}
            <h1>{Name}</h1>
        </div>
     );
}
 
export default IconSet;