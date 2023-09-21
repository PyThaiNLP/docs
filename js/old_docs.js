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
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  };
  
  // Initializing the toast
  var myToast = Toastify(options);
  myToast.showToast();