import axios from "axios";
import { useState, useEffect } from "react";

const EmployShow = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1113/showemploy")
          .then((response) => {
            setData(response.data); 
          })
      }, []);

      return (
        <div>
          <h2>Employ Table</h2>
          <table border="1">
            <thead>
              <tr>
                
                <th>Id</th>
                <th>Name</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.empno}</td>
                  <td>{item.name}</td>
                  <td>{item.basic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
export default EmployShow;