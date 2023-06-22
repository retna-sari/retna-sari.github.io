import { dataApp } from "./data"

// // start testing tools please keep it
	const downloadConsoleLog = async ( text: any, name:any = null) => {
		const data =  JSON.stringify(text);
		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    if(name){
      element.setAttribute('download', `${name}.json`);
    }else{
      element.setAttribute('download', `app_${text.id}.json`);
    }
		element.click();
	}
	// // end testing tools please keep it
export const CreateData = async() => {
  const data = dataApp;
  console.log(data);
  
  const apiList = [];
  const appRecents = [];
  const project = [];
  const banner = [];
  for (let i = 0; i < data.length; i++) {
    const item = dataApp[i];
    apiList.push(item.id);
    if(i < 3){
      appRecents.push(item.id);
    }
    if(i < 6){
      project.push(item.id);
    }
    if(i % 2 == 0){
      banner.push(item.id);
    }
    await downloadConsoleLog(item);
  }
  await downloadConsoleLog(apiList, "apps");
  await downloadConsoleLog(appRecents, 'recent_apps');
  await downloadConsoleLog(banner, 'banner_apps');
  await downloadConsoleLog(project, 'project_apps');
}