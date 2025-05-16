const InfoRow = ({ label, value, isLink = false, isEmail = false }) => (
    <div>
      <span className="text-sm text-gray-500 block mb-1">{label}</span>
      {isLink ? (
        isEmail ? (
          <a href={`mailto:${value}`} className="text-purple-600 hover:text-purple-800 font-medium">
            {value}
          </a>
        ) : (
          <a href={`https://${value}`} className="text-purple-600 hover:text-purple-800 font-medium" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        )
      ) : (
        <span className="font-medium text-gray-800">{value}</span>
      )}
    </div>
  );

  export default InfoRow