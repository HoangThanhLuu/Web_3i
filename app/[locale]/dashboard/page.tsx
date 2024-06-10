const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <iframe
          src={`/dashboad/html/index.html`}
          width="5000px"
          height="5000px"
          title="Embedded Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;