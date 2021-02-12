server {
	server_name milos-task.bluegrid.io;
	index index.html index.htm index.nginx-debian.html;

  // comment
  root /opt/bluegrid-hr-platform/hr-platform-frontend/build;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
