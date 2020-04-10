function myFunction() {

  //Set Basic Config of Google Form//
  var form = FormApp.getActiveForm();
  form.setAcceptingResponses(true);
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);
  form.setDescription('Instructions:\n(Step 1) Finish all the Multiple Choice Questions (MCQs).\n(Step 2) Click the BLUE \'Summit\' button on the bottom left corner to hand in your assignment.');
  form.setConfirmationMessage('Your submission is well received.');
  form.setIsQuiz(true);
  form.setLimitOneResponsePerUser(true);
  form.setProgressBar(true);
  form.setPublishingSummary(true);
  form.setRequireLogin(true);
  form.setShuffleQuestions(false);
  form.setTitle('Revison Multiple Choices Questions (MCQs) on Sxx Chapter xx');
  
  //Replace ID of Your Drive Folder Containing All Images
  var id = "{{ID of Your Drive Folder Containing All Images}}";
  var files = DriveApp.getFolderById(id).getFiles();
  var i=1;
  var arr=[]
  while (files.hasNext()){
    var file = files.next();
    arr.push(file);
  }
  
  //Sort the image ordering according to filenames
  arr.sort();
  
  //Input answer keys 
  answers = "ABCDABCDABEEEEEEE"
  arr.map((file, n) => {
    var imageItem = form.addImageItem();
    imageItem.setImage(file.getBlob());
    imageItem.setTitle(".");
    var mcItem = form.addMultipleChoiceItem();
    mcItem.setPoints([1]);
    mcItem.setRequired(true);
    mcItem.setTitle("Q"+i++);
    var optA = mcItem.createChoice("A", "A"==answers[n]);
    var optB = mcItem.createChoice("B", "B"==answers[n]);
    var optC = mcItem.createChoice("C", "C"==answers[n]);
    var optD = mcItem.createChoice("D", "D"==answers[n]);
    mcItem.setChoices([optA, optB, optC, optD]);
  })
}
