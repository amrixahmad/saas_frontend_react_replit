// LatestProjects.jsx
import React from 'react';

const projectData = [
  { name: "Project Apollo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", statusColor: "success", assignee: "Vanessa Tucker" },
  { name: "Project Fireball", startDate: "01/01/2023", endDate: "31/06/2023", status: "Cancelled", statusColor: "danger", assignee: "William Harris" },
  { name: "Project Hades", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", statusColor: "success", assignee: "Sharon Lessman" },
  { name: "Project Nitro", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", statusColor: "warning", assignee: "Vanessa Tucker" },
  { name: "Project Phoenix", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", statusColor: "success", assignee: "William Harris" },
  { name: "Project X", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", statusColor: "success", assignee: "Sharon Lessman" },
  { name: "Project Romeo", startDate: "01/01/2023", endDate: "31/06/2023", status: "Done", statusColor: "success", assignee: "Christina Mason" },
  { name: "Project Wombat", startDate: "01/01/2023", endDate: "31/06/2023", status: "In progress", statusColor: "warning", assignee: "William Harris" },
];

const LatestProjects = () => {
  return (
    <div className="col-12 col-lg-8 col-xxl-9 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <h5 className="card-title mb-0">Latest Projects</h5>
        </div>
        <table className="table table-hover my-0">
          <thead>
            <tr>
              <th>Name</th>
              <th className="d-none d-xl-table-cell">Start Date</th>
              <th className="d-none d-xl-table-cell">End Date</th>
              <th>Status</th>
              <th className="d-none d-md-table-cell">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td className="d-none d-xl-table-cell">{project.startDate}</td>
                <td className="d-none d-xl-table-cell">{project.endDate}</td>
                <td><span className={`badge bg-${project.statusColor}`}>{project.status}</span></td>
                <td className="d-none d-md-table-cell">{project.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestProjects;