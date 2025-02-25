var options = {
    text: "Warning! You are reading an older version of this document. To read documentation for the current version, click here!",
    duration: -1,
    destination: "https://pythainlp.github.io/docs/5.1/",
    callback: function() {
    //   console.log("Toast hidden");
      Toastify.reposition();
    },
    close: true,
    style: {
      background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)",
    }
  };
  
  // Initializing the toast
  var myToast = Toastify(options);
  myToast.showToast();