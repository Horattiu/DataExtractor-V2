import React from "react";

const Pairs = ({ pairs }) => {
  return (
    <div className="mt-6  bg-gray-200 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 pl-4 pt-4">
        Key: Value
      </h3>
      {pairs.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-600">
                Key
              </th>
              <th className="py-2 px-4 border-b text-left text-gray-600">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {pairs.map((item, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="py-2 px-4 text-gray-800 border-b">{item.key}</td>
                <td className="py-2 px-4 text-gray-800  border-b">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Nu sunt perechi de afisat.</p>
      )}
    </div>
  );
};

export default Pairs;
