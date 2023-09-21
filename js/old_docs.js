var options = {
    text: "Warning! You are reading an older version of this document. To read documentation for the current version, click here.!",
    duration: -1,
    destination: "https://pythainlp.github.io/docs/4.0/",
    callback: function() {
    //   console.log("Toast hidden");
      Toastify.reposition();
    },
    close: true,
    style: {
      background: "linear-gradient(109.6deg, rgb(255, 207, 84) 11.2%, rgb(255, 158, 27) 91.1%)",
    }
  };
  
  // Initializing the toast
  var myToast = Toastify(options);
  myToast.showToast();