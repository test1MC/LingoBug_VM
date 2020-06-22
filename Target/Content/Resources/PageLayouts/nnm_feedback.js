// Change log (lists changes from 11 June 2007 onwards)

// 11 June 2007 - Modified for NNMi. Removed all except feedback mechanism

// 11 June 2007 - Add support for SAP SPI image paths (vpw005)

productVersion = '9.0';
productName = "HP Network Node Manager (NNMi)";

commentsLinkText = "Click here to send documentation feedback";
commentsLink = '<div id="commentsLink" style="float:right; clear:both; text-align:left; font-size:80%; margin:0px 0px 4px 0px; line-height:1.25em"><a href="javascript: sendFeedback();">'+commentsLinkText+'</a></div>';

document.write (commentsLink);

//--------------------------------------------------------------------------
function sendFeedback() {

	var firstheading;
	if (document.getElementsByTagName("h1").length > 0)
		firstheading = document.getElementsByTagName("h1")[0];
	else if (document.getElementsByTagName("h2").length > 0)
		firstheading = document.getElementsByTagName("h2")[0];
	else if (document.getElementsByTagName("h3").length > 0)
		firstheading = document.getElementsByTagName("h3")[0];
	else if (document.getElementsByTagName("h4").length > 0)
		firstheading = document.getElementsByTagName("h4")[0];
	else if (document.getElementsByTagName("h5").length > 0)
		firstheading = document.getElementsByTagName("h5")[0];
	
	
	topicURL = encodeURIComponent(document.URL.match(/[\w-]*\.htm.?/i));
	
	line='_______________________________________________________________\r\n';
	emailBody = 
	'Help Topic ID: ' + topicURL + '\r\n\r\n';
	
	if (firstheading && (firstheading.childNodes.length == 1))
		emailBody += 'Help topic: ' + firstheading.innerHTML + '\r\n\r\n';
	
	emailBody += 'Feedback:\r\n\r\n\r\n\r\n\r\n';
	
	mailURL = 'mailto:Ovdoc-nsm@hp.com?subject=Feedback on ' + productName + ' ' + productVersion + ' documentation&body=' + line + emailBody + line;
	
	mailURL = encodeURI(mailURL);
	
	instructions = 
	'<p><b>We welcome comments and questions!</b></p>' +
	'<p>If an email client is configured on this computer, ' +
	'<a href="' + mailURL + '" style="color: #0066CC;">open an email window</a>.</p>'  +
	'<p>Otherwise, copy the information below to a web mail client, and send this email to the NNMi Help Authors: Ovdoc-nsm@hp.com</p>';
	
	win = window.open("","","height=550,width=480,dependent=yes,scrollbars=yes,resizable=yes");
	win.document.open();
	win.document.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\r\n'+
	'<html><head><title>' + commentsLinkText + '</title></head>' +
	'<body style="font-family:verdana,arial,sans-serif; font-size:0.75em;line-height:1.5em;">' +
	instructions + '<hr>' +
	'<p>'+ emailBody.replace(/\r\n/g,"<br>") + '</p><hr>');
	win.document.close();
}

