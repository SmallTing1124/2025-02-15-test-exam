function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://randomuser.me/api/?results=10`);
        setUsers(res.data.results);
      } catch (error) {
        console.log(error);
      }
    })()

  }, [])
  return (

    <div className="container mx-auto p-4">
      <div className="row g-3">
        {users.map((user, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="bg-light p-3">
                <img
                  src={user.picture.medium}
                  alt="頭像"
                  className="img-fluid rounded-circle"
                />
                <h2 className="mb-0">{`${user.name.first} ${user.name.last}` }</h2>
                <p className="mb-0">{user.email}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);