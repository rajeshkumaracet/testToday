const profilePage = () => {
  element(by.model("formData.name")).sendKeys("Adappt");
  element(by.model("formData.email")).sendKeys("testTeam@adappt.co.uk");
};

const interstSelect = () => {
  element(by.xpath("//*[@id='form-views']/div[1]/div[1]/label[1]/input[1]")).click();
}


module.exports = {profilePage,interstSelect};
