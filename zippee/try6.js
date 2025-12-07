function zippeeToggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}



const reportData = [
 { day: "Wednesday", date: "10/1/2025", stores: {
    "Kalyan Nagar_mnow": 720,
    "Basaveshwar Nagar_mnow": 644,
    "Jakkur_mnow": 573,
    "Begur_mnow": 1090,
    "Thyagaraja Nagar_mnow": 539,
    "Brookfield_mnow": 1440,
    "JP nagar_mnow": 770,
    "Sarjapur Road_mnow": 926
  }, total: 6702 },
  { day: "Thursday", date: "10/2/2025", stores: {
    "Kalyan Nagar_mnow": 825,
    "Basaveshwar Nagar_mnow": 738,
    "Jakkur_mnow": 657,
    "Begur_mnow": 1249,
    "Thyagaraja Nagar_mnow": 617,
    "Brookfield_mnow": 1650,
    "JP nagar_mnow": 882,
    "Sarjapur Road_mnow": 1062
  }, total: 7680 },
  { day: "Friday", date: "10/3/2025", stores: {
    "Kalyan Nagar_mnow": 611,
    "Basaveshwar Nagar_mnow": 547,
    "Jakkur_mnow": 486,
    "Begur_mnow": 925,
    "Thyagaraja Nagar_mnow": 457,
    "Brookfield_mnow": 1222,
    "JP nagar_mnow": 654,
    "Sarjapur Road_mnow": 786
  }, total: 5688 },
  { day: "Saturday", date: "10/4/2025", stores: {
    "Kalyan Nagar_mnow": 568,
    "Basaveshwar Nagar_mnow": 508,
    "Jakkur_mnow": 452,
    "Begur_mnow": 860,
    "Thyagaraja Nagar_mnow": 424,
    "Brookfield_mnow": 1135,
    "JP nagar_mnow": 607,
    "Sarjapur Road_mnow": 731
  }, total: 5284 },
  { day: "Sunday", date: "10/5/2025", stores: {
    "Kalyan Nagar_mnow": 576,
    "Basaveshwar Nagar_mnow": 516,
    "Jakkur_mnow": 459,
    "Begur_mnow": 872,
    "Thyagaraja Nagar_mnow": 431,
    "Brookfield_mnow": 1152,
    "JP nagar_mnow": 616,
    "Sarjapur Road_mnow": 741
  }, total: 5362 },
  { day: "Monday", date: "10/6/2025", stores: {
    "Kalyan Nagar_mnow": 301,
    "Basaveshwar Nagar_mnow": 269,
    "Jakkur_mnow": 240,
    "Begur_mnow": 456,
    "Thyagaraja Nagar_mnow": 225,
    "Brookfield_mnow": 602,
    "JP nagar_mnow": 322,
    "Sarjapur Road_mnow": 388
  }, total: 2803 },
  { day: "Tuesday", date: "10/7/2025", stores: {
    "Kalyan Nagar_mnow": 424,
    "Basaveshwar Nagar_mnow": 380,
    "Jakkur_mnow": 338,
    "Begur_mnow": 642,
    "Thyagaraja Nagar_mnow": 318,
    "Brookfield_mnow": 849,
    "JP nagar_mnow": 454,
    "Sarjapur Road_mnow": 546
  }, total: 3951 },
  { day: "Wednesday", date: "10/8/2025", stores: {
    "Kalyan Nagar_mnow": 457,
    "Basaveshwar Nagar_mnow": 409,
    "Jakkur_mnow": 363,
    "Begur_mnow": 691,
    "Thyagaraja Nagar_mnow": 342,
    "Brookfield_mnow": 913,
    "JP nagar_mnow": 488,
    "Sarjapur Road_mnow": 588
  }, total: 4251 },
  { day: "Thursday", date: "10/9/2025", stores: {
    "Kalyan Nagar_mnow": 527,
    "Basaveshwar Nagar_mnow": 472,
    "Jakkur_mnow": 419,
    "Begur_mnow": 798,
    "Thyagaraja Nagar_mnow": 394,
    "Brookfield_mnow": 1054,
    "JP nagar_mnow": 564,
    "Sarjapur Road_mnow": 678
  }, total: 4906 },
  { day: "Friday", date: "10/10/2025", stores: {
    "Kalyan Nagar_mnow": 610,
    "Basaveshwar Nagar_mnow": 546,
    "Jakkur_mnow": 486,
    "Begur_mnow": 924,
    "Thyagaraja Nagar_mnow": 457,
    "Brookfield_mnow": 1221,
    "JP nagar_mnow": 653,
    "Sarjapur Road_mnow": 785
  }, total: 5682 },
  { day: "Saturday", date: "10/11/2025", stores: {
    "Kalyan Nagar_mnow": 619,
    "Basaveshwar Nagar_mnow": 554,
    "Jakkur_mnow": 492,
    "Begur_mnow": 937,
    "Thyagaraja Nagar_mnow": 463,
    "Brookfield_mnow": 1238,
    "JP nagar_mnow": 662,
    "Sarjapur Road_mnow": 796
  }, total: 5761 },
  { day: "Sunday", date: "10/12/2025", stores: {
    "Kalyan Nagar_mnow": 639,
    "Basaveshwar Nagar_mnow": 572,
    "Jakkur_mnow": 509,
    "Begur_mnow": 968,
    "Thyagaraja Nagar_mnow": 478,
    "Brookfield_mnow": 1279,
    "JP nagar_mnow": 684,
    "Sarjapur Road_mnow": 823
  }, total: 5952 },
  { day: "Monday", date: "10/13/2025", stores: {
    "Kalyan Nagar_mnow": 360,
    "Basaveshwar Nagar_mnow": 322,
    "Jakkur_mnow": 286,
    "Begur_mnow": 544,
    "Thyagaraja Nagar_mnow": 269,
    "Brookfield_mnow": 719,
    "JP nagar_mnow": 385,
    "Sarjapur Road_mnow": 463
  }, total: 3348 },
  { day: "Tuesday", date: "10/14/2025", stores: {
    "Kalyan Nagar_mnow": 448,
    "Basaveshwar Nagar_mnow": 401,
    "Jakkur_mnow": 357,
    "Begur_mnow": 678,
    "Thyagaraja Nagar_mnow": 335,
    "Brookfield_mnow": 896,
    "JP nagar_mnow": 479,
    "Sarjapur Road_mnow": 577
  }, total: 4171 },
  { day: "Wednesday", date: "10/15/2025", stores: {
    "Kalyan Nagar_mnow": 501,
    "Basaveshwar Nagar_mnow": 449,
    "Jakkur_mnow": 399,
    "Begur_mnow": 759,
    "Thyagaraja Nagar_mnow": 375,
    "Brookfield_mnow": 1003,
    "JP nagar_mnow": 536,
    "Sarjapur Road_mnow": 645
  }, total: 4667 },
 // 10/16/2025
{
  day: "Thursday", date: "10/16/2025", stores: {
    "Kalyan Nagar_mnow": 587,
    "Basaveshwar Nagar_mnow": 525,
    "Jakkur_mnow": 466,
    "Begur_mnow": 888,
    "Thyagaraja Nagar_mnow": 439,
    "Brookfield_mnow": 1173,
    "JP nagar_mnow": 628,
    "Sarjapur Road_mnow": 755
  }, total: 5461
},
// 10/17/2025
{
  day: "Friday", date: "10/17/2025", stores: {
    "Kalyan Nagar_mnow": 734,
    "Basaveshwar Nagar_mnow": 657,
    "Jakkur_mnow": 584,
    "Begur_mnow": 1112,
    "Thyagaraja Nagar_mnow": 550,
    "Brookfield_mnow": 1469,
    "JP nagar_mnow": 786,
    "Sarjapur Road_mnow": 945
  }, total: 6837
},
// 10/18/2025
{
  day: "Saturday", date: "10/18/2025", stores: {
    "Kalyan Nagar_mnow": 686,
    "Basaveshwar Nagar_mnow": 614,
    "Jakkur_mnow": 546,
    "Begur_mnow": 1039,
    "Thyagaraja Nagar_mnow": 514,
    "Brookfield_mnow": 1373,
    "JP nagar_mnow": 733,
    "Sarjapur Road_mnow": 883
  }, total: 6388
},
// 10/19/2025
{
  day: "Sunday", date: "10/19/2025", stores: {
    "Kalyan Nagar_mnow": 677,
    "Basaveshwar Nagar_mnow": 606,
    "Jakkur_mnow": 540,
    "Begur_mnow": 1026,
    "Thyagaraja Nagar_mnow": 507,
    "Brookfield_mnow": 1356,
    "JP nagar_mnow": 725,
    "Sarjapur Road_mnow": 872
  }, total: 6309
},
// 10/20/2025
{
  day: "Monday", date: "10/20/2025", stores: {
    "Kalyan Nagar_mnow": 423,
    "Basaveshwar Nagar_mnow": 378,
    "Jakkur_mnow": 336,
    "Begur_mnow": 640,
    "Thyagaraja Nagar_mnow": 316,
    "Brookfield_mnow": 846,
    "JP nagar_mnow": 452,
    "Sarjapur Road_mnow": 544
  }, total: 3935
},
// 10/21/2025
{
  day: "Tuesday", date: "10/21/2025", stores: {
    "Kalyan Nagar_mnow": 486,
    "Basaveshwar Nagar_mnow": 435,
    "Jakkur_mnow": 387,
    "Begur_mnow": 736,
    "Thyagaraja Nagar_mnow": 364,
    "Brookfield_mnow": 973,
    "JP nagar_mnow": 521,
    "Sarjapur Road_mnow": 626
  }, total: 4528
},
  { day: "Wednesday", date: "10/22/2025", stores: {
    "Kalyan Nagar_mnow": 371,
    "Basaveshwar Nagar_mnow": 332,
    "Jakkur_mnow": 295,
    "Begur_mnow": 562,
    "Thyagaraja Nagar_mnow": 278,
    "Brookfield_mnow": 743,
    "JP nagar_mnow": 397,
    "Sarjapur Road_mnow": 478
  }, total: 3456 },
  { day: "Thursday", date: "10/23/2025", stores: {
    "Kalyan Nagar_mnow": 522,
    "Basaveshwar Nagar_mnow": 467,
    "Jakkur_mnow": 416,
    "Begur_mnow": 791,
    "Thyagaraja Nagar_mnow": 391,
    "Brookfield_mnow": 1045,
    "JP nagar_mnow": 559,
    "Sarjapur Road_mnow": 672
  }, total: 4863 },
  { day: "Friday", date: "10/24/2025", stores: {
    "Kalyan Nagar_mnow": 508,
    "Basaveshwar Nagar_mnow": 454,
    "Jakkur_mnow": 404,
    "Begur_mnow": 769,
    "Thyagaraja Nagar_mnow": 380,
    "Brookfield_mnow": 1016,
    "JP nagar_mnow": 543,
    "Sarjapur Road_mnow": 653
  }, total: 4727 },
  { day: "Saturday", date: "10/25/2025", stores: {
    "Kalyan Nagar_mnow": 579,
    "Basaveshwar Nagar_mnow": 518,
    "Jakkur_mnow": 461,
    "Begur_mnow": 877,
    "Thyagaraja Nagar_mnow": 433,
    "Brookfield_mnow": 1158,
    "JP nagar_mnow": 620,
    "Sarjapur Road_mnow": 745
  }, total: 5391 },
  { day: "Sunday", date: "10/26/2025", stores: {
    "Kalyan Nagar_mnow": 535,
    "Basaveshwar Nagar_mnow": 479,
    "Jakkur_mnow": 426,
    "Begur_mnow": 810,
    "Thyagaraja Nagar_mnow": 401,
    "Brookfield_mnow": 1070,
    "JP nagar_mnow": 572,
    "Sarjapur Road_mnow": 689
  }, total: 4982 },
  { day: "Monday", date: "10/27/2025", stores: {
    "Kalyan Nagar_mnow": 306,
    "Basaveshwar Nagar_mnow": 274,
    "Jakkur_mnow": 243,
    "Begur_mnow": 463,
    "Thyagaraja Nagar_mnow": 229,
    "Brookfield_mnow": 611,
    "JP nagar_mnow": 327,
    "Sarjapur Road_mnow": 393
  }, total: 2846 },
  { day: "Tuesday", date: "10/28/2025", stores: {
    "Kalyan Nagar_mnow": 366,
    "Basaveshwar Nagar_mnow": 327,
    "Jakkur_mnow": 291,
    "Begur_mnow": 554,
    "Thyagaraja Nagar_mnow": 274,
    "Brookfield_mnow": 731,
    "JP nagar_mnow": 391,
    "Sarjapur Road_mnow": 470
  }, total: 3404 },
  { day: "Wednesday", date: "10/29/2025", stores: {
    "Kalyan Nagar_mnow": 371,
    "Basaveshwar Nagar_mnow": 332,
    "Jakkur_mnow": 295,
    "Begur_mnow": 562,
    "Thyagaraja Nagar_mnow": 278,
    "Brookfield_mnow": 743,
    "JP nagar_mnow": 397,
    "Sarjapur Road_mnow": 478
  }, total: 3456 },
  { day: "Thursday", date: "10/30/2025", stores: {
    "Kalyan Nagar_mnow": 444,
    "Basaveshwar Nagar_mnow": 397,
    "Jakkur_mnow": 353,
    "Begur_mnow": 672,
    "Thyagaraja Nagar_mnow": 332,
    "Brookfield_mnow": 888,
    "JP nagar_mnow": 475,
    "Sarjapur Road_mnow": 571
  }, total: 4132 },
  { day: "Friday", date: "10/31/2025", stores: {
    "Kalyan Nagar_mnow": 508,
     "Basaveshwar Nagar_mnow": 454,
    "Jakkur_mnow": 404,
    "Begur_mnow": 769,
    "Thyagaraja Nagar_mnow": 380,
    "Brookfield_mnow": 1016,
    "JP nagar_mnow": 543,
    "Sarjapur Road_mnow": 653
  }, total: 4727 },

  { day: "Saturday", date: "11/1/2025", stores: {
    "Kalyan Nagar_mnow": 619,
    "Basaveshwar Nagar_mnow": 406,
    "Jakkur_mnow": 414,
    "Begur_mnow": 711,
    "Thyagaraja Nagar_mnow": 535,
    "Brookfield_mnow": 1050,
    "JP nagar_mnow": 568,
    "Sarjapur Road_mnow": 591
  }, total: 4894 },

  { day: "Sunday", date: "11/2/2025", stores: {
    "Kalyan Nagar_mnow": 583,
    "Basaveshwar Nagar_mnow": 383,
    "Jakkur_mnow": 390,
    "Begur_mnow": 670,
    "Thyagaraja Nagar_mnow": 504,
    "Brookfield_mnow": 990,
    "JP nagar_mnow": 536,
    "Sarjapur Road_mnow": 557
  }, total: 4613 },

  { day: "Monday", date: "11/3/2025", stores: {
    "Kalyan Nagar_mnow": 372,
    "Basaveshwar Nagar_mnow": 244,
    "Jakkur_mnow": 248,
    "Begur_mnow": 427,
    "Thyagaraja Nagar_mnow": 321,
    "Brookfield_mnow": 631,
    "JP nagar_mnow": 341,
    "Sarjapur Road_mnow": 355
  }, total: 2939 },

  { day: "Tuesday", date: "11/4/2025", stores: {
    "Kalyan Nagar_mnow": 408,
    "Basaveshwar Nagar_mnow": 268,
    "Jakkur_mnow": 273,
    "Begur_mnow": 469,
    "Thyagaraja Nagar_mnow": 353,
    "Brookfield_mnow": 693,
    "JP nagar_mnow": 375,
    "Sarjapur Road_mnow": 390
  }, total: 3229 },

  { day: "Wednesday", date: "11/5/2025", stores: {
    "Kalyan Nagar_mnow": 455,
    "Basaveshwar Nagar_mnow": 299,
    "Jakkur_mnow": 304,
    "Begur_mnow": 523,
    "Thyagaraja Nagar_mnow": 393,
    "Brookfield_mnow": 773,
    "JP nagar_mnow": 418,
    "Sarjapur Road_mnow": 435
  }, total: 3600 },

  { day: "Thursday", date: "11/6/2025", stores: {
    "Kalyan Nagar_mnow": 553,
    "Basaveshwar Nagar_mnow": 363,
    "Jakkur_mnow": 370,
    "Begur_mnow": 635,
    "Thyagaraja Nagar_mnow": 478,
    "Brookfield_mnow": 938,
    "JP nagar_mnow": 508,
    "Sarjapur Road_mnow": 528
  }, total: 4373 },

  { day: "Friday", date: "11/7/2025", stores: {
    "Kalyan Nagar_mnow": 591,
    "Basaveshwar Nagar_mnow": 388,
    "Jakkur_mnow": 395,
    "Begur_mnow": 679,
    "Thyagaraja Nagar_mnow": 511,
    "Brookfield_mnow": 1003,
    "JP nagar_mnow": 543,
    "Sarjapur Road_mnow": 565
  }, total: 4675 },

  { day: "Saturday", date: "11/8/2025", stores: {
    "Kalyan Nagar_mnow": 527,
    "Basaveshwar Nagar_mnow": 346,
    "Jakkur_mnow": 353,
    "Begur_mnow": 606,
    "Thyagaraja Nagar_mnow": 456,
    "Brookfield_mnow": 895,
    "JP nagar_mnow": 484,
    "Sarjapur Road_mnow": 504
  }, total: 4171 },

  { day: "Sunday", date: "11/9/2025", stores: {
    "Kalyan Nagar_mnow": 573,
    "Basaveshwar Nagar_mnow": 376,
    "Jakkur_mnow": 383,
    "Begur_mnow": 658,
    "Thyagaraja Nagar_mnow": 495,
    "Brookfield_mnow": 972,
    "JP nagar_mnow": 526,
    "Sarjapur Road_mnow": 547
  }, total: 4530 },

  { day: "Monday", date: "11/10/2025", stores: {
    "Kalyan Nagar_mnow": 340,
    "Basaveshwar Nagar_mnow": 223,
    "Jakkur_mnow": 227,
    "Begur_mnow": 391,
    "Thyagaraja Nagar_mnow": 294,
    "Brookfield_mnow": 577,
    "JP nagar_mnow": 312,
    "Sarjapur Road_mnow": 325
  }, total: 2689 },

    {
    day: "Tuesday",
    date: "11/11/2025",
    stores: {
      "Kalyan Nagar_mnow": 399,
      "Basaveshwar Nagar_mnow": 262,
      "Jakkur_mnow": 267,
      "Begur_mnow": 459,
      "Thyagaraja Nagar_mnow": 345,
      "Brookfield_mnow": 677,
      "JP nagar_mnow": 367,
      "Sarjapur Road_mnow": 381
    },
    total: 3157
  },
  {
    day: "Wednesday",
    date: "11/12/2025",
    stores: {
      "Kalyan Nagar_mnow": 482,
      "Basaveshwar Nagar_mnow": 316,
      "Jakkur_mnow": 322,
      "Begur_mnow": 554,
      "Thyagaraja Nagar_mnow": 417,
      "Brookfield_mnow": 818,
      "JP nagar_mnow": 443,
      "Sarjapur Road_mnow": 460
    },
    total: 3812
  },
  {
    day: "Thursday",
    date: "11/13/2025",
    stores: {
      "Kalyan Nagar_mnow": 553,
      "Basaveshwar Nagar_mnow": 363,
      "Jakkur_mnow": 370,
      "Begur_mnow": 635,
      "Thyagaraja Nagar_mnow": 478,
      "Brookfield_mnow": 938,
      "JP nagar_mnow": 508,
      "Sarjapur Road_mnow": 528
    },
    total: 4373
  },
  {
    day: "Friday",
    date: "11/14/2025",
    stores: {
      "Kalyan Nagar_mnow": 591,
      "Basaveshwar Nagar_mnow": 388,
      "Jakkur_mnow": 395,
      "Begur_mnow": 679,
      "Thyagaraja Nagar_mnow": 511,
      "Brookfield_mnow": 1003,
      "JP nagar_mnow": 543,
      "Sarjapur Road_mnow": 565
    },
    total: 4675
  },
  {
    day: "Saturday",
    date: "11/15/2025",
    stores: {
      "Kalyan Nagar_mnow": 529,
      "Basaveshwar Nagar_mnow": 347,
      "Jakkur_mnow": 354,
      "Begur_mnow": 608,
      "Thyagaraja Nagar_mnow": 457,
      "Brookfield_mnow": 898,
      "JP nagar_mnow": 486,
      "Sarjapur Road_mnow": 505
    },
    total: 4184
  },
  {
    day: "Sunday",
    date: "11/16/2025",
    stores: {
      "Kalyan Nagar_mnow": 577,
      "Basaveshwar Nagar_mnow": 379,
      "Jakkur_mnow": 386,
      "Begur_mnow": 663,
      "Thyagaraja Nagar_mnow": 499,
      "Brookfield_mnow": 979,
      "JP nagar_mnow": 530,
      "Sarjapur Road_mnow": 551
    },
    total: 4564
  },
   {
    day: "Monday",
    date: "11/17/2025",
    stores: {
      "Kalyan Nagar_mnow": 423,
      "Basaveshwar Nagar_mnow": 278,
      "Jakkur_mnow": 283,
      "Begur_mnow": 486,
      "Thyagaraja Nagar_mnow": 366,
      "Brookfield_mnow": 717,
      "JP nagar_mnow": 389,
      "Sarjapur Road_mnow": 404
    },
    total: 3346
  },
  {
    day: "Tuesday",
    date: "11/18/2025",
    stores: {
      "Kalyan Nagar_mnow": 458,
      "Basaveshwar Nagar_mnow": 300,
      "Jakkur_mnow": 305,
      "Begur_mnow": 525,
      "Thyagaraja Nagar_mnow": 399,
      "Brookfield_mnow": 776,
      "JP nagar_mnow": 420,
      "Sarjapur Road_mnow": 437
    },
    total: 3620
  },
  {
    day: "Wednesday",
    date: "11/19/2025",
    stores: {
      "Kalyan Nagar_mnow": 515,
      "Basaveshwar Nagar_mnow": 338,
      "Jakkur_mnow": 344,
      "Begur_mnow": 592,
      "Thyagaraja Nagar_mnow": 458,
      "Brookfield_mnow": 874,
      "JP nagar_mnow": 473,
      "Sarjapur Road_mnow": 492
    },
    total: 4086
  },
  {
    day: "Thursday",
    date: "11/20/2025",
    stores: {
      "Kalyan Nagar_mnow": 633,
      "Basaveshwar Nagar_mnow": 416,
      "Jakkur_mnow": 424,
      "Begur_mnow": 729,
      "Thyagaraja Nagar_mnow": 548,
      "Brookfield_mnow": 1077,
      "JP nagar_mnow": 583,
      "Sarjapur Road_mnow": 606
    },
    total: 5016
  },
  {
    day: "Friday",
    date: "11/21/2025",
    stores: {
      "Kalyan Nagar_mnow": 565,
      "Basaveshwar Nagar_mnow": 367,
      "Jakkur_mnow": 373,
      "Begur_mnow": 642,
      "Thyagaraja Nagar_mnow": 438,
      "Brookfield_mnow": 948,
      "JP nagar_mnow": 514,
      "Sarjapur Road_mnow": 533
    },
    total: 4380
  },
  {
    day: "Saturday",
    date: "11/22/2025",
    stores: {
      "Kalyan Nagar_mnow": 566,
      "Basaveshwar Nagar_mnow": 370,
      "Jakkur_mnow": 375,
      "Begur_mnow": 649,
      "Thyagaraja Nagar_mnow": 495,
      "Brookfield_mnow": 958,
      "JP nagar_mnow": 519,
      "Sarjapur Road_mnow": 540
    },
    total: 4472
  },
  {
    day: "Sunday",
    date: "11/23/2025",
    stores: {
      "Kalyan Nagar_mnow": 516,
      "Basaveshwar Nagar_mnow": 338,
      "Jakkur_mnow": 345,
      "Begur_mnow": 593,
      "Thyagaraja Nagar_mnow": 403,
      "Brookfield_mnow": 875,
      "JP nagar_mnow": 474,
      "Sarjapur Road_mnow": 493
    },
    total: 4037
  },
  {
    day: "Monday",
    date: "11/24/2025",
    stores: {
      "Kalyan Nagar_mnow": 411,
      "Basaveshwar Nagar_mnow": 270,
      "Jakkur_mnow": 275,
      "Begur_mnow": 472,
      "Thyagaraja Nagar_mnow": 302,
      "Brookfield_mnow": 697,
      "JP nagar_mnow": 377,
      "Sarjapur Road_mnow": 393
    },
    total: 3197
  },
  {
    day: "Tuesday",
    date: "11/25/2025",
    stores: {
      "Kalyan Nagar_mnow": 457,
      "Basaveshwar Nagar_mnow": 300,
      "Jakkur_mnow": 305,
      "Begur_mnow": 525,
      "Thyagaraja Nagar_mnow": 334,
      "Brookfield_mnow": 776,
      "JP nagar_mnow": 420,
      "Sarjapur Road_mnow": 436
    },
    total: 3553
  },
  {
    day: "Wednesday",
    date: "11/26/2025",
    stores: {
      "Kalyan Nagar_mnow": 668,
      "Basaveshwar Nagar_mnow": 438,
      "Jakkur_mnow": 446,
      "Begur_mnow": 768,
      "Thyagaraja Nagar_mnow": 556,
      "Brookfield_mnow": 1134,
      "JP nagar_mnow": 614,
      "Sarjapur Road_mnow": 638
    },
    total: 5262
  },
  {
    day: "Thursday",
    date: "11/27/2025",
    stores: {
      "Kalyan Nagar_mnow": 645,
      "Basaveshwar Nagar_mnow": 423,
      "Jakkur_mnow": 432,
      "Begur_mnow": 741,
      "Thyagaraja Nagar_mnow": 558,
      "Brookfield_mnow": 1095,
      "JP nagar_mnow": 593,
      "Sarjapur Road_mnow": 616
    },
    total: 5103
  },
  {
    day: "Friday",
    date: "11/28/2025",
    stores: {
      "Kalyan Nagar_mnow": 797,
      "Basaveshwar Nagar_mnow": 523,
      "Jakkur_mnow": 532,
      "Begur_mnow": 916,
      "Thyagaraja Nagar_mnow": 696,
      "Brookfield_mnow": 1352,
      "JP nagar_mnow": 732,
      "Sarjapur Road_mnow": 761
    },
    total: 6309
  },
  {
    day: "Saturday",
    date: "11/29/2025",
    stores: {
      "Kalyan Nagar_mnow": 760,
      "Basaveshwar Nagar_mnow": 498,
      "Jakkur_mnow": 507,
      "Begur_mnow": 872,
      "Thyagaraja Nagar_mnow": 656,
      "Brookfield_mnow": 1288,
      "JP nagar_mnow": 697,
      "Sarjapur Road_mnow": 725
    },
    total: 6003
  },
  {
    day: "Sunday",
    date: "11/30/2025",
    stores: {
      "Kalyan Nagar_mnow": 716,
      "Basaveshwar Nagar_mnow": 469,
      "Jakkur_mnow": 478,
      "Begur_mnow": 822,
      "Thyagaraja Nagar_mnow": 639,
      "Brookfield_mnow": 1214,
      "JP nagar_mnow": 657,
      "Sarjapur Road_mnow": 684
    },
    total: 5679
  },
  {
    day: "Monday",
    date: "12/1/2025",
    stores: {
      "Kalyan Nagar_mnow": 445,
      "Basaveshwar Nagar_mnow": 294,
      "Jakkur_mnow": 287,
      "Begur_mnow": 465,
      "Thyagaraja Nagar_mnow": 320,
      "Brookfield_mnow": 770,
      "JP nagar_mnow": 375,
      "Sarjapur Road_mnow": 380
    },
    total: 3336
  },
  {
    day: "Tuesday",
    date: "12/2/2025",
    stores: {
      "Kalyan Nagar_mnow": 475,
      "Basaveshwar Nagar_mnow": 342,
      "Jakkur_mnow": 312,
      "Begur_mnow": 477,
      "Thyagaraja Nagar_mnow": 360,
      "Brookfield_mnow": 836,
      "JP nagar_mnow": 413,
      "Sarjapur Road_mnow": 391
    },
    total: 3606
  },
  {
    day: "Wednesday",
    date: "12/3/2025",
    stores: {
      "Kalyan Nagar_mnow": 475,
      "Basaveshwar Nagar_mnow": 346,
      "Jakkur_mnow": 289,
      "Begur_mnow": 486,
      "Thyagaraja Nagar_mnow": 419,
      "Brookfield_mnow": 955,
      "JP nagar_mnow": 455,
      "Sarjapur Road_mnow": 419
    },
    total: 3844
  },
  {
    day: "Thursday",
    date: "12/4/2025",
    stores: {
      "Kalyan Nagar_mnow": 724,
      "Basaveshwar Nagar_mnow": 502,
      "Jakkur_mnow": 472,
      "Begur_mnow": 733,
      "Thyagaraja Nagar_mnow": 600,
      "Brookfield_mnow": 1338,
      "JP nagar_mnow": 637,
      "Sarjapur Road_mnow": 628
    },
    total: 5634
  },
  {
    day: "Friday",
    date: "12/5/2025",
    stores: {
      "Kalyan Nagar_mnow": 987,
      "Basaveshwar Nagar_mnow": 635,
      "Jakkur_mnow": 598,
      "Begur_mnow": 979,
      "Thyagaraja Nagar_mnow": 731,
      "Brookfield_mnow": 1685,
      "JP nagar_mnow": 860,
      "Sarjapur Road_mnow": 828
    },
    total: 7303
  },
  {
    day: "Saturday",
    date: "12/6/2025",
    stores: {
      "Kalyan Nagar_mnow": 1018,
      "Basaveshwar Nagar_mnow": 709,
      "Jakkur_mnow": 567,
      "Begur_mnow": 1022,
      "Thyagaraja Nagar_mnow": 848,
      "Brookfield_mnow": 1881,
      "JP nagar_mnow": 844,
      "Sarjapur Road_mnow": 908
    },
    total: 7797
  },
  {
    day: "Sunday",
    date: "12/7/2025",
    stores: {
      "Kalyan Nagar_mnow": 847,
      "Basaveshwar Nagar_mnow": 615,
      "Jakkur_mnow": 584,
      "Begur_mnow": 927,
      "Thyagaraja Nagar_mnow": 712,
      "Brookfield_mnow": 1581,
      "JP nagar_mnow": 790,
      "Sarjapur Road_mnow": 820
    },
    total: 6876
  },
  {
    day: "Monday",
    date: "12/8/2025",
    stores: {
      "Kalyan Nagar_mnow": 630,
      "Basaveshwar Nagar_mnow": 416,
      "Jakkur_mnow": 407,
      "Begur_mnow": 657,
      "Thyagaraja Nagar_mnow": 454,
      "Brookfield_mnow": 1092,
      "JP nagar_mnow": 532,
      "Sarjapur Road_mnow": 539
    },
    total: 4737
  },
  {
    day: "Tuesday",
    date: "12/9/2025",
    stores: {
      "Kalyan Nagar_mnow": 660,
      "Basaveshwar Nagar_mnow": 476,
      "Jakkur_mnow": 433,
      "Begur_mnow": 663,
      "Thyagaraja Nagar_mnow": 501,
      "Brookfield_mnow": 1163,
      "JP nagar_mnow": 575,
      "Sarjapur Road_mnow": 544
    },
    total: 4949
  },
  {
    day: "Wednesday",
    date: "12/10/2025",
    stores: {
      "Kalyan Nagar_mnow": 635,
      "Basaveshwar Nagar_mnow": 463,
      "Jakkur_mnow": 386,
      "Begur_mnow": 650,
      "Thyagaraja Nagar_mnow": 559,
      "Brookfield_mnow": 1275,
      "JP nagar_mnow": 608,
      "Sarjapur Road_mnow": 560
    },
    total: 5202
  },
     {
    day: "Monday",
    date: "12/01/2025",
    stores: {
      "Kalyan Nagar_mnow": 445,
      "Basaveshwar Nagar_mnow": 294,
      "Jakkur_mnow": 287,
      "Begur_mnow": 465,
      "Thyagaraja Nagar_mnow": 320,
      "Brookfield_mnow": 770,
      "JP nagar_mnow": 375,
      "Sarjapur Road_mnow": 380
    },
    total: 3336
  },
  {
    day: "Tuesday",
    date: "12/02/2025",
    stores: {
      "Kalyan Nagar_mnow": 475,
      "Basaveshwar Nagar_mnow": 342,
      "Jakkur_mnow": 312,
      "Begur_mnow": 477,
      "Thyagaraja Nagar_mnow": 360,
      "Brookfield_mnow": 836,
      "JP nagar_mnow": 413,
      "Sarjapur Road_mnow": 391
    },
    total: 3606
  },
  {
    day: "Wednesday",
    date: "12/03/2025",
    stores: {
      "Kalyan Nagar_mnow": 475,
      "Basaveshwar Nagar_mnow": 346,
      "Jakkur_mnow": 289,
      "Begur_mnow": 486,
      "Thyagaraja Nagar_mnow": 419,
      "Brookfield_mnow": 955,
      "JP nagar_mnow": 455,
      "Sarjapur Road_mnow": 419
    },
    total: 3844
  },
  {
    day: "Thursday",
    date: "12/04/2025",
    stores: {
      "Kalyan Nagar_mnow": 724,
      "Basaveshwar Nagar_mnow": 502,
      "Jakkur_mnow": 472,
      "Begur_mnow": 733,
      "Thyagaraja Nagar_mnow": 600,
      "Brookfield_mnow": 1338,
      "JP nagar_mnow": 637,
      "Sarjapur Road_mnow": 628
    },
    total: 5634
  },
  {
    day: "Friday",
    date: "12/05/2025",
    stores: {
      "Kalyan Nagar_mnow": 987,
      "Basaveshwar Nagar_mnow": 635,
      "Jakkur_mnow": 598,
      "Begur_mnow": 979,
      "Thyagaraja Nagar_mnow": 731,
      "Brookfield_mnow": 1685,
      "JP nagar_mnow": 860,
      "Sarjapur Road_mnow": 828
    },
    total: 7303
  },
  {
    day: "Saturday",
    date: "12/06/2025",
    stores: {
      "Kalyan Nagar_mnow": 1018,
      "Basaveshwar Nagar_mnow": 709,
      "Jakkur_mnow": 567,
      "Begur_mnow": 1022,
      "Thyagaraja Nagar_mnow": 848,
      "Brookfield_mnow": 1881,
      "JP nagar_mnow": 844,
      "Sarjapur Road_mnow": 908
    },
    total: 7797
  },
  {
    day: "Sunday",
    date: "12/07/2025",
    stores: {
      "Kalyan Nagar_mnow": 847,
      "Basaveshwar Nagar_mnow": 615,
      "Jakkur_mnow": 584,
      "Begur_mnow": 927,
      "Thyagaraja Nagar_mnow": 712,
      "Brookfield_mnow": 1581,
      "JP nagar_mnow": 790,
      "Sarjapur Road_mnow": 820
    },
    total: 6876
  },
  {
    day: "Monday",
    date: "12/08/2025",
    stores: {
      "Kalyan Nagar_mnow": 630,
      "Basaveshwar Nagar_mnow": 416,
      "Jakkur_mnow": 407,
      "Begur_mnow": 657,
      "Thyagaraja Nagar_mnow": 454,
      "Brookfield_mnow": 1092,
      "JP nagar_mnow": 532,
      "Sarjapur Road_mnow": 539
    },
    total: 4737
  },
  {
    day: "Tuesday",
    date: "12/09/2025",
    stores: {
      "Kalyan Nagar_mnow": 660,
      "Basaveshwar Nagar_mnow": 476,
      "Jakkur_mnow": 433,
      "Begur_mnow": 663,
      "Thyagaraja Nagar_mnow": 501,
      "Brookfield_mnow": 1163,
      "JP nagar_mnow": 575,
      "Sarjapur Road_mnow": 544
    },
    total: 4949
  },
  {
    day: "Wednesday",
    date: "12/10/2025",
    stores: {
      "Kalyan Nagar_mnow": 635,
      "Basaveshwar Nagar_mnow": 463,
      "Jakkur_mnow": 386,
      "Begur_mnow": 650,
      "Thyagaraja Nagar_mnow": 559,
      "Brookfield_mnow": 1275,
      "JP nagar_mnow": 608,
      "Sarjapur Road_mnow": 560
    },
    total: 5202
  },
  {
    day: "Thursday",
    date: "12/11/2025",
    stores: {
      "Kalyan Nagar_mnow": 650,
      "Basaveshwar Nagar_mnow": 450,
      "Jakkur_mnow": 424,
      "Begur_mnow": 658,
      "Thyagaraja Nagar_mnow": 540,
      "Brookfield_mnow": 1201,
      "JP nagar_mnow": 572,
      "Sarjapur Road_mnow": 563
    },
    total: 5191
  },
  {
    day: "Friday",
    date: "12/12/2025",
    stores: {
      "Kalyan Nagar_mnow": 735,
      "Basaveshwar Nagar_mnow": 473,
      "Jakkur_mnow": 446,
      "Begur_mnow": 730,
      "Thyagaraja Nagar_mnow": 544,
      "Brookfield_mnow": 1256,
      "JP nagar_mnow": 641,
      "Sarjapur Road_mnow": 618
    },
    total: 5645
  },
  {
    day: "Saturday",
    date: "12/13/2025",
    stores: {
      "Kalyan Nagar_mnow": 799,
      "Basaveshwar Nagar_mnow": 556,
      "Jakkur_mnow": 445,
      "Begur_mnow": 802,
      "Thyagaraja Nagar_mnow": 665,
      "Brookfield_mnow": 1474,
      "JP nagar_mnow": 661,
      "Sarjapur Road_mnow": 712
    },
    total: 6293
  },
  {
    day: "Sunday",
    date: "12/14/2025",
    stores: {
      "Kalyan Nagar_mnow": 669,
      "Basaveshwar Nagar_mnow": 485,
      "Jakkur_mnow": 462,
      "Begur_mnow": 732,
      "Thyagaraja Nagar_mnow": 561,
      "Brookfield_mnow": 1246,
      "JP nagar_mnow": 623,
      "Sarjapur Road_mnow": 647
    },
    total: 5648
  },
  {
    day: "Monday",
    date: "12/15/2025",
    stores: {
      "Kalyan Nagar_mnow": 533,
      "Basaveshwar Nagar_mnow": 352,
      "Jakkur_mnow": 344,
      "Begur_mnow": 557,
      "Thyagaraja Nagar_mnow": 384,
      "Brookfield_mnow": 923,
      "JP nagar_mnow": 450,
      "Sarjapur Road_mnow": 456
    },
    total: 3333
  },
  {
    day: "Tuesday",
    date: "12/16/2025",
    stores: {
      "Kalyan Nagar_mnow": 558,
      "Basaveshwar Nagar_mnow": 402,
      "Jakkur_mnow": 365,
      "Begur_mnow": 560,
      "Thyagaraja Nagar_mnow": 423,
      "Brookfield_mnow": 980,
      "JP nagar_mnow": 485,
      "Sarjapur Road_mnow": 460
    },
    total: 3522
  },
  {
    day: "Wednesday",
    date: "12/17/2025",
    stores: {
      "Kalyan Nagar_mnow": 561,
      "Basaveshwar Nagar_mnow": 409,
      "Jakkur_mnow": 341,
      "Begur_mnow": 575,
      "Thyagaraja Nagar_mnow": 494,
      "Brookfield_mnow": 1127,
      "JP nagar_mnow": 537,
      "Sarjapur Road_mnow": 495
    },
    total: 3735
  },
  {
    day: "Thursday",
    date: "12/18/2025",
    stores: {
      "Kalyan Nagar_mnow": 586,
      "Basaveshwar Nagar_mnow": 406,
      "Jakkur_mnow": 382,
      "Begur_mnow": 594,
      "Thyagaraja Nagar_mnow": 486,
      "Brookfield_mnow": 1083,
      "JP nagar_mnow": 515,
      "Sarjapur Road_mnow": 508
    },
    total: 3760
  },
  {
    day: "Friday",
    date: "12/19/2025",
    stores: {
      "Kalyan Nagar_mnow": 659,
      "Basaveshwar Nagar_mnow": 425,
      "Jakkur_mnow": 400,
      "Begur_mnow": 655,
      "Thyagaraja Nagar_mnow": 488,
      "Brookfield_mnow": 1127,
      "JP nagar_mnow": 575,
      "Sarjapur Road_mnow": 554
    },
    total: 4162
  }

]




// we add the new hour percentages data here

const hourPercentages = [
  { hour: "6-7",   Sunday: 0.57,  Monday: 1.20,  Tuesday: 1.54,  Wednesday: 1.32,  Thursday: 1.23,  Friday: 1.38,  Saturday: 1.11 },
  { hour: "7-8",   Sunday: 1.68,  Monday: 3.74,  Tuesday: 4.57,  Wednesday: 4.25,  Thursday: 3.97,  Friday: 4.15,  Saturday: 3.82 },
  { hour: "8-9",   Sunday: 4.57,  Monday: 7.95,  Tuesday: 9.25,  Wednesday: 9.21,  Thursday: 8.73,  Friday: 9.50,  Saturday: 7.85 },
  { hour: "9-10",  Sunday: 10.43, Monday: 13.90, Tuesday: 14.93, Wednesday: 15.05, Thursday: 15.06, Friday: 15.84, Saturday: 14.16 },
  { hour: "10-11", Sunday: 17.34, Monday: 20.67, Tuesday: 22.29, Wednesday: 22.70, Thursday: 21.93, Friday: 23.18, Saturday: 20.56 },
  { hour: "11-12", Sunday: 25.73, Monday: 28.04, Tuesday: 28.46, Wednesday: 30.44, Thursday: 29.58, Friday: 30.51, Saturday: 27.06 },
  { hour: "12-1",  Sunday: 33.96, Monday: 34.83, Tuesday: 35.31, Wednesday: 37.17, Thursday: 36.61, Friday: 38.49, Saturday: 35.71 },
  { hour: "1-2",   Sunday: 41.19, Monday: 41.21, Tuesday: 41.77, Wednesday: 43.08, Thursday: 42.81, Friday: 45.37, Saturday: 43.99 },
  { hour: "2-3",   Sunday: 48.65, Monday: 47.49, Tuesday: 47.20, Wednesday: 49.37, Thursday: 49.47, Friday: 51.46, Saturday: 51.40 },
  { hour: "3-4",   Sunday: 55.32, Monday: 53.73, Tuesday: 52.63, Wednesday: 55.65, Thursday: 55.35, Friday: 57.36, Saturday: 58.81 },
  { hour: "4-5",   Sunday: 63.10, Monday: 60.98, Tuesday: 59.14, Wednesday: 62.75, Thursday: 61.85, Friday: 63.59, Saturday: 65.81 },
  { hour: "5-6",   Sunday: 70.83, Monday: 68.44, Tuesday: 65.51, Wednesday: 69.75, Thursday: 68.56, Friday: 70.56, Saturday: 73.29 },
  { hour: "6-7",   Sunday: 78.05, Monday: 74.83, Tuesday: 72.41, Wednesday: 76.88, Thursday: 75.70, Friday: 77.49, Saturday: 79.93 },
  { hour: "7-8",   Sunday: 85.12, Monday: 82.15, Tuesday: 80.19, Wednesday: 84.34, Thursday: 83.52, Friday: 84.78, Saturday: 86.40 },
  { hour: "8-9",   Sunday: 91.00, Monday: 89.41, Tuesday: 87.49, Wednesday: 90.93, Thursday: 90.41, Friday: 90.91, Saturday: 91.35 },
  { hour: "9-10",  Sunday: 96.99, Monday: 95.42, Tuesday: 94.73, Wednesday: 96.04, Thursday: 96.24, Friday: 96.24, Saturday: 96.18 },
  { hour: "10-11", Sunday: 100.01, Monday: 99.99, Tuesday: 100.00, Wednesday: 99.96, Thursday: 100.02, Friday: 100.01, Saturday: 99.99 }
];



// Helper to get the current day name
function getDayName(date) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}

// Helper to get the percentage for the current hour and day
function getCurrentHourPercentage() {
  const now = new Date();
  const hour = now.getHours();
  const dayName = getDayName(now);

  // Map JS hour to your table row (6-7 AM is 6, 7-8 AM is 7, ..., 9-10 PM is 21)
  // Find the closest hour row that is <= current hour
  let rowIdx = hour - 6;
  if (rowIdx < 0) rowIdx = 0;
  if (rowIdx >= hourPercentages.length) rowIdx = hourPercentages.length - 1;

  return {
    label: hourPercentages[rowIdx].hour,
    percent: hourPercentages[rowIdx][dayName]
  };
}

// Helper to get the percentage for any day and hour
function getHourPercentageFor(dayName, hour) {
  let rowIdx = hour - 6;
  if (rowIdx < 0) rowIdx = 0;
  if (rowIdx >= hourPercentages.length) rowIdx = hourPercentages.length - 1;
  return {
    label: hourPercentages[rowIdx].hour,
    percent: hourPercentages[rowIdx][dayName]
  };
}

function generateSummaryTable() {
  const tableBody = document.querySelector('#reportTable tbody');
  tableBody.innerHTML = '';

  // Find the entry for today (if exists)
  const todayDate = getTodayDateString();
  const todayData = reportData.find(d => d.date === todayDate);
  const latestData = todayData || reportData[reportData.length - 1];
  const storeNames = Object.keys(latestData.stores);

  // Get current hour percentage info
  const now = new Date();
  const hourInfo = getHourPercentageFor(getDayName(now), now.getHours());

  // Update the column header
  document.getElementById('tillHour').textContent = hourInfo.label;

  let totalCurrent = 0;
  let totalProjected = 0;
  let totalBuffer = 0;

  storeNames.forEach(store => {
    const tr = document.createElement('tr');
    const tdStore = document.createElement('td');
    tdStore.textContent = store;
    tr.appendChild(tdStore);

    // Projected Orders on current date (full day)
    const fullDayOrders = latestData.stores[store];
    const tdCurrent = document.createElement('td');
    tdCurrent.textContent = fullDayOrders;
    tr.appendChild(tdCurrent);

    // Projected Orders till current hour (using percentage)
    // This is the Excel logic: =C5*'June Projection'!$D$33
    const projected = Math.round(fullDayOrders * (hourInfo.percent / 100));
    const tdProjected = document.createElement('td');
    tdProjected.textContent = projected;
    tr.appendChild(tdProjected);

    // Projected Orders with 15% buffer
    const bufferValue = Math.round(projected * 1.15);
    const tdBuffer = document.createElement('td');
    tdBuffer.textContent = bufferValue;
    tr.appendChild(tdBuffer);

    tableBody.appendChild(tr);

    // Add to totals
    totalCurrent += fullDayOrders;
    totalProjected += projected;
    totalBuffer += bufferValue;
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = 'bold';
  totalRow.style.background = '#ffe066';

  const tdTotalLabel = document.createElement('td');
  tdTotalLabel.textContent = 'Total';
  totalRow.appendChild(tdTotalLabel);

  const tdTotalCurrent = document.createElement('td');
  tdTotalCurrent.textContent = totalCurrent;
  totalRow.appendChild(tdTotalCurrent);

  const tdTotalProjected = document.createElement('td');
  tdTotalProjected.textContent = totalProjected;
  totalRow.appendChild(tdTotalProjected);

  const tdTotalBuffer = document.createElement('td');
  tdTotalBuffer.textContent = totalBuffer;
  totalRow.appendChild(tdTotalBuffer);

  tableBody.appendChild(totalRow);
}

function generateFilteredTableForSearch(dateStr, timeStr) {
  const tableBody = document.querySelector('#reportTable tbody');
  tableBody.innerHTML = '';

  if (!dateStr) {
    tableBody.innerHTML = '<tr><td colspan="4">Please select a date.</td></tr>';
    return;
  }

  // Parse date and time
  const [year, month, day] = dateStr.split('-');
  const [hour = 0] = (timeStr || '00:00').split(':');
  const searchDate = new Date(year, month - 1, day);
  const searchHour = parseInt(hour, 10);

  // Get day name for the selected date
  const dayName = getDayName(searchDate);

  // Find the entry for the selected date (or latest before)
  const formattedDate = `${parseInt(month)}/${parseInt(day)}/${year}`;
  let dataIdx = reportData.findIndex(d => d.date === formattedDate);
  if (dataIdx === -1) {
    // If not found, use the latest before the date
    dataIdx = reportData.findIndex(d => {
      const [m, dNum, y] = d.date.split('/').map(Number);
      const entryDate = new Date(y, m - 1, dNum);
      return entryDate <= searchDate;
    });
    if (dataIdx === -1) {
      tableBody.innerHTML = '<tr><td colspan="4">No data found for the selected date.</td></tr>';
      return;
    }
  }
  const selectedData = reportData[dataIdx];
  const storeNames = Object.keys(selectedData.stores);

  // Get percentage for the selected day/hour
  const hourInfo = getHourPercentageFor(dayName, searchHour);

  // Update the column header
  document.getElementById('tillHour').textContent = hourInfo.label;

  let totalCurrent = 0;
  let totalProjected = 0;
  let totalBuffer = 0;

  storeNames.forEach(store => {
    const tr = document.createElement('tr');
    const tdStore = document.createElement('td');
    tdStore.textContent = store;
    tr.appendChild(tdStore);

    // Projected Orders on selected date (full day)
    const tdCurrent = document.createElement('td');
    tdCurrent.textContent = selectedData.stores[store];
    tr.appendChild(tdCurrent);

    // Projected Orders till selected hour (using percentage)
    const projected = Math.round(selectedData.stores[store] * (hourInfo.percent / 100));
    const tdProjected = document.createElement('td');
    tdProjected.textContent = projected;
    tr.appendChild(tdProjected);

    // Projected Orders with 15% buffer
    const bufferValue = Math.round(projected * 1.15);
    const tdBuffer = document.createElement('td');
    tdBuffer.textContent = bufferValue;
    tr.appendChild(tdBuffer);

    tableBody.appendChild(tr);

    // Add to totals
    totalCurrent += selectedData.stores[store];
    totalProjected += projected;
    totalBuffer += bufferValue;
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.style.fontWeight = 'bold';
  totalRow.style.background = '#ffe066';

  const tdTotalLabel = document.createElement('td');
  tdTotalLabel.textContent = 'Total';
  totalRow.appendChild(tdTotalLabel);

  const tdTotalCurrent = document.createElement('td');
  tdTotalCurrent.textContent = totalCurrent;
  totalRow.appendChild(tdTotalCurrent);

  const tdTotalProjected = document.createElement('td');
  tdTotalProjected.textContent = totalProjected;
  totalRow.appendChild(tdTotalProjected);

  const tdTotalBuffer = document.createElement('td');
  tdTotalBuffer.textContent = totalBuffer;
  totalRow.appendChild(tdTotalBuffer);

  tableBody.appendChild(totalRow);
}

// Utility to get today's date in "M/D/YYYY" format
function getTodayDateString() {
  const today = new Date();
  return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
}

// Update the date in the header
function updateCurrentDateHeader() {
  const now = new Date();
  const formatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const currentDateSpan = document.getElementById('currentDate');
  if (currentDateSpan) {
    currentDateSpan.textContent = formatted;
  }
}

// Update the time in the header
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();
}

document.addEventListener('DOMContentLoaded', () => {
  generateSummaryTable();
  updateCurrentDateHeader();
  updateDateTime();
  setInterval(() => {
    generateSummaryTable();
    updateCurrentDateHeader();
    updateDateTime();
  }, 60 * 1000); // update every minute

  // Update final table header to include Attempted Orders %
  const finalTableHeader = document.querySelector('#finalTable thead tr');
  if (finalTableHeader) {
    if (!Array.from(finalTableHeader.children).some(th => th.textContent.includes('Order Attainment'))) {
      const th1 = document.createElement('th');
      th1.textContent = 'Order Attainment %';
      finalTableHeader.appendChild(th1);
    }
    if (!Array.from(finalTableHeader.children).some(th => th.textContent.includes('Attempted Orders'))) {
      const th2 = document.createElement('th');
      th2.textContent = 'Attempted Orders %';
      finalTableHeader.appendChild(th2);
    }
  }
});

// Attach to your search button
document.getElementById('searchBtn').addEventListener('click', () => {
  const dateVal = document.getElementById('searchDate').value;
  const timeVal = document.getElementById('searchTime').value;
  generateFilteredTableForSearch(dateVal, timeVal);
});

document.getElementById("submitBtn").addEventListener("click", function () {
    processFile();
});

// --- BASE processFile DEFINITION ---
function processFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan Nagar_mnow", 
            "Basaveshwar Nagar_mnow", 
            "Jakkur_mnow", 
            "Begur_mnow", 
            "Thyagaraja Nagar_mnow", 
            "Brookfield_mnow", 
            "JP nagar_mnow", 
            "Sarjapur Road_mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

// --- END BASE processFile ---

// --- DeepPain Orders Feature ---
// Declare at the top, before any function uses it
let deepPainOrderRows = [];

// Extract DeepPain orders from uploaded file (call this in processFile)
function extractDeepPainOrders(fileData) {
    deepPainOrderRows = [];
    fileData.forEach(order => {
        let breached = (order["Breached"] || "").toLowerCase();
        let breachedDuration = parseFloat(order["Breached Duration (In Min)"] || 0);
        let status = (order["Order Status"] || "").toLowerCase();
        // Deep Pain: delivered, breached=yes, breached duration > 15
        if (status === "delivered" && breached === "yes" && breachedDuration > 15) {
            deepPainOrderRows.push({
                orderNumber: order["Order Number"] || "",
                orderDate: order["Order Date"] || "",
                storeName: order["Store Name"] || "",
                breached: order["Breached"] || "",
                breachedDuration: order["Breached Duration (In Min)"] || "",
                deepPainStatus: "Deep Pain"
            });
        }
    });
}

// Show/hide DeepPain Orders section
if (document.getElementById("deepPainBtn")) {
    document.getElementById("deepPainBtn").addEventListener("click", function () {
        const section = document.getElementById("deepPainSection");
        if (!section) return;
        section.style.display = section.style.display === "none" ? "block" : "none";
        if (section.style.display === "block") {
            renderDeepPainTable(deepPainOrderRows);
        }
    });
}

// Render DeepPain Orders table
function renderDeepPainTable(data) {
    const tbody = document.querySelector("#deepPainTable tbody");
    if (!tbody) return;
    tbody.innerHTML = "";
    if (!data.length) {
        tbody.innerHTML = "<tr><td colspan='6'>No Deep Pain Orders found.</td></tr>";
        return;
    }
    data.forEach(row => {
        let orderDate = row.orderDate;
        // If orderDate is a number (Excel serial), convert it
        if (!isNaN(orderDate)) {
            orderDate = formatDate(excelDateToJSDate(Number(orderDate)));
        }
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.orderNumber}</td>
            <td>${orderDate}</td>
            <td>${row.storeName}</td>
            <td>${row.breached}</td>
            <td>${row.breachedDuration}</td>
            <td>${row.deepPainStatus}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Search/filter DeepPain Orders table
if (document.getElementById("deepPainSearch")) {
    document.getElementById("deepPainSearch").addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        const filtered = deepPainOrderRows.filter(row =>
            row.storeName.toLowerCase().includes(query) ||
            String(row.orderNumber).toLowerCase().includes(query)
        );
        renderDeepPainTable(filtered);
    });
}

// --- Patch processFile to call extractDeepPainOrders ---
const originalProcessFile = processFile;
processFile = function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        // Extract DeepPain Orders for the table
        extractDeepPainOrders(fileData);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan Nagar_mnow", 
            "Basaveshwar Nagar_mnow", 
            "Jakkur_mnow", 
            "Begur_mnow", 
            "Thyagaraja Nagar_mnow", 
            "Brookfield_mnow", 
            "JP nagar_mnow", 
            "Sarjapur Road_mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

// --- DeepPain Orders Details Feature ---
var DeepPainOrders_detailsRows = [];

function extractDeepPainOrders_details(fileData) {
    DeepPainOrders_detailsRows = [];
    fileData.forEach(order => {
        let breached = (order["Breached"] || "").toLowerCase();
        let breachedDuration = parseFloat(order["Breached Duration (In Min)"] || 0);
        let status = (order["Order Status"] || "").toLowerCase();
        // Deep Pain: delivered, breached=yes, breached duration > 15
        if (status === "delivered" && breached === "yes" && breachedDuration > 15) {
            DeepPainOrders_detailsRows.push({
                orderNumber: order["Order Number"] || "",
                orderDate: order["Order Date"] || "",
                storeName: order["Store Name"] || "",
                breached: order["Breached"] || "",
                breachedDuration: order["Breached Duration (In Min)"] || "",
                deepPainStatus: "Deep Pain",
                orderStatus: order["Order Status"] || "",
                customerName: order["Customer Name"] || "",
                otherDetails: JSON.stringify(order)
            });
        }
    });
}

document.getElementById("DeepPainOrders_detailsBtn").addEventListener("click", function () {
    const section = document.getElementById("DeepPainOrders_detailsSection");
    section.style.display = section.style.display === "none" ? "block" : "none";
    if (section.style.display === "block") {
        renderDeepPainOrders_detailsTable(DeepPainOrders_detailsRows);
    }
});

function renderDeepPainOrders_detailsTable(data) {
    const tbody = document.querySelector("#DeepPainOrders_detailsTable tbody");
    tbody.innerHTML = "";
    if (!data.length) {
        tbody.innerHTML = "<tr><td colspan='9'>No Deep Pain Orders found.</td></tr>";
        return;
    }
    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.orderNumber}</td>
            <td>${row.orderDate}</td>
            <td>${row.storeName}</td>
            <td>${row.breached}</td>
            <td>${row.breachedDuration}</td>
            <td>${row.deepPainStatus}</td>
            <td>${row.orderStatus}</td>
            <td>${row.customerName}</td>
            <td><pre style='white-space:pre-wrap;max-width:200px;'>${row.otherDetails}</pre></td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("DeepPainOrders_detailsSearch").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    const filtered = DeepPainOrders_detailsRows.filter(row =>
        row.storeName.toLowerCase().includes(query) ||
        String(row.orderNumber).toLowerCase().includes(query) ||
        row.orderStatus.toLowerCase().includes(query) ||
        row.customerName.toLowerCase().includes(query)
    );
    renderDeepPainOrders_detailsTable(filtered);
});

// Patch processFile to also extract DeepPainOrders_details
const originalProcessFile2 = processFile;
processFile = function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an Excel or CSV file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        let workbook;
        if (file.name.endsWith(".csv")) {
            workbook = XLSX.read(e.target.result, { type: "string" });
        } else {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: "array" });
        }
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const fileData = XLSX.utils.sheet_to_json(sheet);
        extractDeepPainOrders_details(fileData);
        // --- AGGREGATION LOGIC ---
        let storeOrders = {};
        let deliveredOrders = {};
        let attemptedOrders = {};
        let cancelledOrders = {};
        let deepPainOrders = {};
        const includedStores = [
            "Kalyan Nagar_mnow", 
            "Basaveshwar Nagar_mnow", 
            "Jakkur_mnow", 
            "Begur_mnow", 
            "Thyagaraja Nagar_mnow", 
            "Brookfield_mnow", 
            "JP nagar_mnow", 
            "Sarjapur Road_mnow"
        ];
        fileData.forEach(order => {
            let storeName = order["Store Name"] ? order["Store Name"].trim() : "Unknown Store";
            if (!includedStores.includes(storeName)) return;
            let status = order["Order Status"] ? order["Order Status"].trim().toLowerCase() : "";
            let breachStatus = order["Breached"] ? order["Breached"].trim().toLowerCase() : "no";
            let breachDuration = order["Breached Duration (In Min)"] ? parseFloat(order["Breached Duration (In Min)"]) : 5;
            storeOrders[storeName] = (storeOrders[storeName] || 0) + 1;
            if (status === "delivered") {
                deliveredOrders[storeName] = (deliveredOrders[storeName] || 0) + 1;
                if (breachStatus === "yes" && breachDuration > 15) {
                    deepPainOrders[storeName] = (deepPainOrders[storeName] || 0) + 1;
                }
            } else if (status === "attempted") {
                attemptedOrders[storeName] = (attemptedOrders[storeName] || 0) + 1;
            } else if (status.includes("cancel")) {
                cancelledOrders[storeName] = (cancelledOrders[storeName] || 0) + 1;
            }
        });
        // Show the summary table
        generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, {}, deepPainOrders);
        originalProcessFile2.apply(this, arguments);
    };
    if (file.name.endsWith(".csv")) {
        reader.readAsText(file);
    } else {
        reader.readAsArrayBuffer(file);
    }
}

let lastSummaryHTML = ""; // Store the summary table HTML
let lastProjectionHTML = ""; // Store the projection table HTML

// After generating the summary table, store its HTML and show the Final Table button
function generateSummaryPage(storeOrders, deliveredOrders, attemptedOrders, cancelledOrders, actualRiders, deepPainOrders) {
    let totalOrdersSum = 0;
    let cancelledSum = 0;
    let deliveredSum = 0;
    let atteptedSum = 0;
    let deepPainSum = 0;
    let SumofCanelledPercent = 0;

    let htmlContent = `
        <table class="table table-bordered" id="summaryTable">
            <thead>
                <tr>
                    <th>Store Name</th>
                    <th>Total Orders</th>
                    <th>Cancelled Orders</th>
                    <th>Cancelled %</th>
                    <th>Delivered Orders</th>
                    <th>Attempted Orders</th>
                    <th>Deep Pain</th>
                    <th>Deep Pain %</th>
                    <th>Actual Riders</th>
                    <th>Idle rider</th>
                    <th>BF</th>
                </tr>
            </thead>
            <tbody>
                ${Object.keys(storeOrders).map((store, rowIdx) => {
                    let totalOrders = storeOrders[store] || 0;
                    let cancelled = cancelledOrders[store] || 0;
                    let delivered = deliveredOrders[store] || 0;
                    let attempted = attemptedOrders[store] || 0;
                    let deepPain = deepPainOrders[store] || 0;
                    let cancelledPercent = totalOrders > 0 ? (((cancelled + attempted) / totalOrders) * 100).toFixed(2) : "0.00";
                    let deepPainPercent = delivered > 0 ? ((deepPain / delivered) * 100).toFixed(2) : "0.00";

                    totalOrdersSum += totalOrders;
                    cancelledSum += cancelled;
                    deliveredSum += delivered;
                    atteptedSum += attempted;
                    deepPainSum += deepPain;
                    SumofCanelledPercent += parseFloat(cancelledPercent);

                    // Add input fields for the last 3 columns
                    return `
                        <tr>
                            <td>${store}</td>
                            <td>${totalOrders}</td>
                            <td>${cancelled}</td>
                            <td>${cancelledPercent}%</td>
                            <td>${delivered}</td>
                            <td>${attempted}</td>
                            <td>${deepPain}</td>
                            <td>${deepPainPercent}%</td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-0" data-row="${rowIdx}" data-col="0"></td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-1" data-row="${rowIdx}" data-col="1"></td>
                            <td><input type="text" class="summary-input" id="input-${rowIdx}-2" data-row="${rowIdx}" data-col="2"></td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
            <tfoot>
                <tr style="background:#007bff;color:#fff;font-weight:bold;">
                    <td>Total</td>
                    <td>${totalOrdersSum}</td>
                    <td>${cancelledSum}</td>
                    <td>${(SumofCanelledPercent/Object.keys(storeOrders).length).toFixed(2)}%</td>
                    <td>${deliveredSum}</td>
                    <td>${atteptedSum}</td>
                    <td>${deepPainSum}</td>
                    <td>${deliveredSum > 0 ? ((deepPainSum / deliveredSum) * 100).toFixed(2) : "0.00"}%</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    `;
    document.getElementById("output").innerHTML = htmlContent;
    lastSummaryHTML = htmlContent;
    document.getElementById("finalTableBtn").style.display = "inline-block";

    // Enable arrow key navigation for the input fields
    enableSummaryArrowNavigation();
}

// Add this function to enable arrow navigation
function enableSummaryArrowNavigation() {
    const inputs = Array.from(document.querySelectorAll('.summary-input'));
    const rowCount = document.querySelectorAll('#summaryTable tbody tr').length;
    const colCount = 3; // Actual Riders, Idle rider, BF

    inputs.forEach((input, idx) => {
        input.addEventListener('keydown', function(e) {
            let row = parseInt(input.dataset.row);
            let col = parseInt(input.dataset.col);
            if (e.key === 'ArrowDown' && row < rowCount - 1) {
                e.preventDefault();
                const next = document.querySelector(`.summary-input[data-row="${row+1}"][data-col="${col}"]`);
                if (next) next.focus();
            }
            if (e.key === 'ArrowUp' && row > 0) {
                e.preventDefault();
                const prev = document.querySelector(`.summary-input[data-row="${row-1}"][data-col="${col}"]`);
                if (prev) prev.focus();
            }
            if (e.key === 'ArrowRight' && col < colCount - 1) {
                e.preventDefault();
                const right = document.querySelector(`.summary-input[data-row="${row}"][data-col="${col+1}"]`);
                if (right) right.focus();
            }
            if (e.key === 'ArrowLeft' && col > 0) {
                e.preventDefault();
                const left = document.querySelector(`.summary-input[data-row="${row}"][data-col="${col-1}"]`);
                if (left) left.focus();
            }
        });
    });
}

// Helper to get the current projection table as HTML
function getProjectionTableHTML() {
    const table = document.getElementById("reportTable");
    return table ? table.outerHTML : "";
}

// Final Table button logic
document.getElementById("finalTableBtn").addEventListener("click", function () {
    // 1. Get projection data from the DOM
    const projectionTable = document.getElementById("reportTable");
    const projectionRows = projectionTable ? projectionTable.querySelectorAll("tbody tr") : [];
    const projectionData = {};
    let projectionTotals = [];

    projectionRows.forEach((row, idx) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 2) return;
        const store = cells[0].textContent.trim();
        if (store.toLowerCase() === "total") {
            projectionTotals = Array.from(cells).slice(1).map(td => td.textContent.trim());
            return;
        }
        projectionData[store] = Array.from(cells).slice(1).map(td => td.textContent.trim());
    });

    // 2. Get summary data from the last summary table (already stored in lastSummaryHTML)
    // We'll parse the HTML to extract the summary data
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = lastSummaryHTML;
    const summaryRows = tempDiv.querySelectorAll("tbody tr");
    const summaryData = {};
    let summaryTotals = [];

    summaryRows.forEach((row, idx) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 2) return;
        const store = cells[0].textContent.trim();
        // Get manual input values from the DOM
        const actualRiders = document.getElementById(`input-${idx}-0`)?.value || "";
        const idleRider = document.getElementById(`input-${idx}-1`)?.value || "";
        const bf = document.getElementById(`input-${idx}-2`)?.value || "";
        // Replace the last 3 columns with manual values
        const summaryArr = Array.from(cells).slice(1, -3).map(td => td.textContent.trim());
        summaryArr.push(actualRiders, idleRider, bf);
        summaryData[store] = summaryArr;
    });

    // Get summary totals
    const summaryTotalRow = tempDiv.querySelector("tfoot tr");
    if (summaryTotalRow) {
        summaryTotals = Array.from(summaryTotalRow.querySelectorAll("td")).slice(1).map(td => td.textContent.trim());
    }

    // 3. Merge headers
    const projectionHeaders = projectionTable ? Array.from(projectionTable.querySelectorAll("thead th")).slice(1).map(th => th.textContent.trim()) : [];
    const summaryHeaders = tempDiv.querySelectorAll("thead th");
    const summaryHeaderArr = Array.from(summaryHeaders).map(th => th.textContent.trim()).slice(1); // skip Store Name

    // 4. Build merged table HTML
      // Only exclude Attempted Orders % columns for buffer, keep all other columns and logic
     let attemptedOrdersPctIndices = [];
    let attemptedOrdersPctHeaders = projectionHeaders.slice(1).filter((h, idx) => !h.toLowerCase().includes('buffer'));
    projectionHeaders.slice(1).forEach((h, idx) => {
        if (!h.toLowerCase().includes('buffer')) attemptedOrdersPctIndices.push(idx + 1); // +1 to match column index
    });
    let mergedHTML = `<style>
.hide-col { display: none !important; }
.hide-corrected-deep-pain { display: none !important; }
/* Add these styles to control table width and cell wrapping */
.table-bordered {
    width: 100%;
    table-layout: fixed; /* Ensure even column distribution */
    word-wrap: break-word; /* Wrap long words */
    overflow-wrap: break-word; /* Alternative for older browsers */
}
.table-bordered th,
.table-bordered td {
    padding: 8px; /* Reduce padding */
    font-size: 12px; /* Adjust font size */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis; /* Show ellipsis for overflow */
    white-space: acd; /* Prevent text from wrapping */
}
/* Responsive adjustments */
@media (max-width: 768px) {
    .table-bordered th,
    .table-bordered td {
        padding: 6px; /* Further reduce padding on smaller screens */
        font-size: 10px; /* Adjust font size for smaller screens */
    }
}
</style>
<table class="table table-bordered"><thead><tr>
        <th>Store Name</th>
        ${projectionHeaders.map(h => `<th>${h}</th>`).join("")}
        ${summaryHeaderArr.map((h, i) => {
            let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
            return `<th${hide ? ' class="hide-col"' : ''}>${h}</th>`;
        }).join("")}
        ${attemptedOrdersPctHeaders.map(h => `<th>Order Attainment (${h})</th>`).join("")}
        <th>Deep Pain (Order Count)</th>
        <th>Additional Orders</th>
        <th class="hide-corrected-deep-pain">Corrected DeepPain</th>
        <th>®Actual Deep_Pain</th>
    </tr></thead><tbody>`;

    // 5. Merge rows by Store Name
    const allStores = Array.from(new Set([...Object.keys(projectionData), ...Object.keys(summaryData)]));
    let deepPainOrderCounts = [];
    let additionalOrdersList = [];
    let correctedDeepPainList = [];
    let actualDeepPainList = [];
    allStores.forEach(store => {
        mergedHTML += `<tr><td>${store}</td>`;
        // Projection columns
        (projectionData[store] || projectionHeaders.map(() => "")).forEach(val => {
            mergedHTML += `<td>${val}</td>`;
        });
        // Summary columns
        (summaryData[store] || summaryHeaderArr.map(() => "")).forEach((val, i) => {
            let h = summaryHeaderArr[i];
            let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
            if (h.toLowerCase().includes('deep pain %')) {
                let percentVal = val;
                if (typeof percentVal === 'string' && percentVal.includes('%')) percentVal = percentVal.replace('%', '');
                percentVal = parseFloat(percentVal) || 0;
                let color = percentVal > 5 ? 'red' : '#0f0';
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''} style="color:${color};">${val}</td>`;
            } else if (i >= summaryHeaderArr.length - 3) {
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''}><input type="text" class="merged-input" data-store="${store}" data-col="${i}" value="${val || ''}"></td>`;
            } else {
                mergedHTML += `<td${hide ? ' class="hide-col"' : ''}>${val}</td>`;
            }
        });
        // Order Attainment columns for only non-buffer Projected Orders columns
        if (projectionData[store]) {
            attemptedOrdersPctIndices.forEach((colIdx, arrIdx) => {
                let projected = parseInt(projectionData[store][colIdx]) || 0;
                let total = summaryData[store] ? parseInt(summaryData[store][0]) || 0 : 0;
                let percent = projected ? ((total / projected) * 100).toFixed(2) : "0.00";
                mergedHTML += `<td class="attempted-pct-cell" data-store="${store}" data-col="${colIdx}">${percent}%</td>`;
            });
        } else {
            attemptedOrdersPctIndices.forEach((colIdx) => {
                mergedHTML += `<td class="attempted-pct-cell" data-store="${store}" data-col="${colIdx}">0.00%</td>`;
            });
        }
        // Deep Pain (Order Count) column
        let totalOrders = summaryData[store] ? parseFloat(summaryData[store][0]) || 0 : 0;
        let deepPainPercentIdx = summaryHeaderArr.findIndex(hh => hh.toLowerCase().includes('deep pain %'));
        let deepPainPercent = summaryData[store] ? summaryData[store][deepPainPercentIdx] : '';
        if (deepPainPercent && typeof deepPainPercent === 'string' && deepPainPercent.includes('%')) deepPainPercent = deepPainPercent.replace('%', '');
        deepPainPercent = parseFloat(deepPainPercent) || 0;
        let deepPainOrderCount = ((totalOrders * deepPainPercent) / 100);
        deepPainOrderCounts.push(deepPainOrderCount);
        mergedHTML += `<td>${deepPainOrderCount.toFixed(2)}</td>`;
        // Order Attainment  column
        let projectedBuffer = projectionData[store] ? parseFloat(projectionData[store][2]) || 0 : 0;
        let additionalOrders = (totalOrders - projectedBuffer) < 0 ? 0 : (totalOrders - projectedBuffer);
        additionalOrdersList.push(additionalOrders);
        mergedHTML += `<td>${additionalOrders}</td>`;
        // Corrected DeepPain column
        let correctedDeepPain = deepPainOrderCount - additionalOrders;
        correctedDeepPainList.push(correctedDeepPain);
        mergedHTML += `<td class="hide-corrected-deep-pain">${correctedDeepPain.toFixed(2)}</td>`;
        // Actual Deep_Pain column (new logic)
        let actualDeepPain = 0;
        if (totalOrders !== 0) {
          actualDeepPain = correctedDeepPain / totalOrders * 100; // Convert to percentage
          if (actualDeepPain < 0) actualDeepPain = 0; // Ensure no negative value
        }
        actualDeepPainList.push(actualDeepPain);
        mergedHTML += `<td class="actual-deep-pain-cell">${actualDeepPain.toFixed(2)}</td>`;
        mergedHTML += `</tr>`;
    });
    // 6. Add totals row (footer)
    mergedHTML += `<tfoot><tr style="background:#000;color:#fff;font-weight:bold;">
        <td>Total</td>`;
    projectionTotals.forEach(val => mergedHTML += `<td>${val}</td>`);
    summaryHeaderArr.forEach((h, i) => {
        let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
        if (h.toLowerCase().includes('deep pain %')) {
            let deepPainPercents = allStores.map(store => {
                let idx = summaryHeaderArr.findIndex(hh => hh.toLowerCase().includes('deep pain %'));
                let val = summaryData[store] ? summaryData[store][idx] : '';
                if (val && val.includes('%')) val = val.replace('%', '');
                let num = parseFloat(val);
                return isNaN(num) ? 0 : num;
            });
            let avg = deepPainPercents.length ? (deepPainPercents.reduce((a, b) => a + b, 0) / deepPainPercents.length) : 0;
            let color = avg > 5 ? 'red' : '#0f0';
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''} style="color:${color};">${avg.toFixed(2)}%</td>`;
        } else if (i >= summaryHeaderArr.length - 3) {
            mergedHTML += `<td id="merged-footer-userinput-${i - (summaryHeaderArr.length - 3)}">0</td>`;
        } else if (summaryTotals[i]) {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}>${summaryTotals[i]}</td>`;
        } else {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}></td>`;
        }
    });
    attemptedOrdersPctIndices.forEach((colIdx, arrIdx) => {
        mergedHTML += `<td id="merged-footer-attempted-pct-${colIdx}">0.00%</td>`;
    });
    let deepPainOrderCountTotal = deepPainOrderCounts.reduce((a, b) => a + b, 0);
    mergedHTML += `<td>${deepPainOrderCountTotal.toFixed(2)}</td>`;
    let additionalOrdersTotal = additionalOrdersList.reduce((a, b) => a + b, 0);
    mergedHTML += `<td>${additionalOrdersTotal}</td>`;
    let correctedDeepPainTotal = correctedDeepPainList.reduce((a, b) => a + b, 0);
    // Hide the Corrected DeepPain cell in the footer (second last cell)
    mergedHTML += `<td class="hide-corrected-deep-pain">${correctedDeepPainTotal.toFixed(2)}</td>`;
    // Show average for Actual Deep_Pain in the footer (last column), with id actual-deep-pain-cell-average
    let actualDeepPainAvg = actualDeepPainList.length ? (actualDeepPainList.reduce((a, b) => a + b, 0) / actualDeepPainList.length) : 0;
    mergedHTML += `<td id="actual-deep-pain-cell-average">${actualDeepPainAvg.toFixed(2)}</td>`;
    mergedHTML += `</tr>`;
    // Grand total row for user input columns
    mergedHTML += `<tr style="background:#007bff;color:#fff;font-weight:bold;"><td>Grand Total</td>`;
    projectionHeaders.forEach(() => mergedHTML += `<td></td>`);
    summaryHeaderArr.forEach((h, i) => {
        let hide = h.toLowerCase().includes('cancelled orders') || h.toLowerCase().includes('attempted orders') || h.toLowerCase().includes('deep pain') && !h.toLowerCase().includes('%');
        if (i === summaryHeaderArr.length - 3) {
            mergedHTML += `<td colspan="3" id="merged-footer-userinput-grand">0</td>`;
        } else if (i < summaryHeaderArr.length - 3) {
            mergedHTML += `<td${hide ? ' class="hide-col"' : ''}></td>`;
        }
    });
    attemptedOrdersPctIndices.forEach(() => {
        mergedHTML += `<td></td>`;
    });
    mergedHTML += `<td></td>`; // Deep Pain (Order Count) grand total (not needed)
    mergedHTML += `<td></td>`; // Order Attainment  grand total (not needed)
    mergedHTML += `<td></td>`; // Corrected DeepPain grand total (not needed)
    mergedHTML += `<td></td>`; // Actual Deep_Pain grand total (not needed)
    mergedHTML += `</tr></tfoot>`;
    mergedHTML += `</tbody></table>`;

    document.getElementById("output").innerHTML = `
    <div style="font-weight:bold;font-size:18px;margin-bottom:8px;">
        Current Time: ${getCurrentTimeString()}
    </div>
    <h2>📊 Final MeTablerged </h2>
     <h1 class="Bangalore">Bangalore</h1>
    ${mergedHTML}`;

    // --- DYNAMIC FOOTER UPDATE LOGIC ---
    function updateMergedFooterTotals() {
        let colTotals = [0, 0, 0];
        // For each row, sum user input columns
        document.querySelectorAll('.merged-input').forEach(input => {
            const col = parseInt(input.dataset.col);
            const val = parseFloat(input.value);
            if (!isNaN(val)) colTotals[col - (summaryHeaderArr.length - 3)] += val;
        });
        // Update user input column totals
        for (let i = 0; i < 3; ++i) {
            const footerCell = document.getElementById(`merged-footer-userinput-${i}`);
            if (footerCell) {
                if (i === 2) { // BF column: show average as (sum of user input) / 8
                    let bfInputs = Array.from(document.querySelectorAll('input[data-col="' + (summaryHeaderArr.length - 1) + '"]'));
                    let bfSum = 0;
                    bfInputs.forEach(input => {
                        let num = parseFloat(input.value);
                        if (!isNaN(num)) { bfSum += num; }
                    });
                    let avg = bfSum / 8; // Always divide by 8 (number of stores)
                    footerCell.textContent = avg.toFixed(2);
                } else {
                    footerCell.textContent = colTotals[i];
                }
            }
        }
        // Grand total
        document.getElementById('merged-footer-userinput-grand').textContent = colTotals.reduce((a, b) => a + b, 0);
        // Update Order Attainment average for each column (only non-buffer)
        attemptedOrdersPctIndices.forEach((colIdx) => {
            let sum = 0, count = 0;
            document.querySelectorAll(`.attempted-pct-cell[data-col="${colIdx}"]`).forEach(cell => {
                let pct = parseFloat(cell.textContent);
                if (!isNaN(pct)) {
                    sum += pct;
                    count++;
                }
            });
            let avg = count ? (sum / count) : 0;
            document.getElementById(`merged-footer-attempted-pct-${colIdx}`).textContent = avg.toFixed(2) + '%';
        });
    }
    // Initial update
    updateMergedFooterTotals();
    // Listen for input changes
    document.querySelectorAll('.merged-input').forEach(input => {
        input.addEventListener('input', function() {
            // Update Order Attainment for this row if needed (if user changes total orders input)
            const row = input.closest('tr');
            if (row) {
                // Find the total orders cell and projected orders cells in this row
                const cells = row.querySelectorAll('td');
                let totalOrders = parseFloat(cells[projectionHeaders.length + 1]?.querySelector('input')?.value || cells[projectionHeaders.length + 1]?.textContent || 0);
                attemptedOrdersPctIndices.forEach((colIdx) => {
                    let projectedOrders = parseFloat(cells[colIdx + 1]?.textContent || 0);
                    let attemptedCell = row.querySelector(`.attempted-pct-cell[data-col="${colIdx}"]`);
                    if (attemptedCell) {
                        let pct = attemptedOrdersPercent(totalOrders, projectedOrders);
                        attemptedCell.textContent = pct + '%';
                    }
                });
            }
            updateMergedFooterTotals();
        });
    });
    // Enable arrow key navigation for merged-input fields
    const mergedInputs = Array.from(document.querySelectorAll('.merged-input'));
    if (mergedInputs.length > 0) {
        // Determine row and col counts
        const mergedRows = document.querySelectorAll('#output table tbody tr');
        const rowCount = mergedRows.length;
        const colCount = 3; // Always 3 user input columns
        mergedInputs.forEach((input, idx) => {
            input.addEventListener('keydown', function(e) {
                let row = -1, col = -1;
                // Find row and col by traversing DOM
                for (let r = 0; r < rowCount; ++r) {
                    const rowInputs = mergedRows[r].querySelectorAll('.merged-input');
                    for (let c = 0; c < rowInputs.length; ++c) {
                        if (rowInputs[c] === input) {
                            row = r;
                            col = c;
                        }
                    }
                }
                if (row === -1 || col === -1) return;
                if (e.key === 'ArrowDown' && row < rowCount - 1) {
                    e.preventDefault();
                    const next = mergedRows[row + 1].querySelectorAll('.merged-input')[col];
                    if (next) next.focus();
                }
                if (e.key === 'ArrowUp' && row > 0) {
                    e.preventDefault();
                    const prev = mergedRows[row - 1].querySelectorAll('.merged-input')[col];
                    if (prev) prev.focus();
                }
                if (e.key === 'ArrowRight' && col < colCount - 1) {
                    e.preventDefault();
                    const right = mergedRows[row].querySelectorAll('.merged-input')[col + 1];
                    if (right) right.focus();
                }
                if (e.key === 'ArrowLeft' && col > 0) {
                    e.preventDefault();
                    const left = mergedRows[row].querySelectorAll('.merged-input')[col - 1];
                    if (left) left.focus();
                }
            });

        });
    }
});

// List of stores in the required order
const finalStores = [
  "Kalyan Nagar_mnow ",
  "Basaveshwar Nagar_mnow",
  "Jakkur_mnow",
  "Begur_mnow",
  "Thyagaraja Nagar_mnow",
  "Brookfield_mnow",
  "JP nagar_mnow",
  "Sarjapur Road_mnow"
];

// Show final table on button click
document.getElementById('finalTableBtn').addEventListener('click', function() {
  const section = document.getElementById('finalTableSection');
  section.style.display = 'block';
  generateFinalTable();
});

// Helper for Attempted Orders %
function attemptedOrdersPercent(totalOrders, projectedOrders) {

  if (!projectedOrders || projectedOrders === 0) return "0.00";
  return ((totalOrders / projectedOrders) * 100).toFixed(2);
}

// Helper to get the correct Projected Orders for Order Attainment calculation
function getProjectedOrdersForAttempted(store) {
  // Use the Projected Orders | till 9-10 AM column (second column after Store Name)
  const projectionTable = document.getElementById("reportTable");
  if (!projectionTable) return 0;
  const rows = projectionTable.querySelectorAll("tbody tr");
  for (let row of rows) {
    const cells = row.querySelectorAll("td");
    // if() -- removed incomplete statement
    // (removed incomplete 'if' statement)
    if (cells[1] && cells[1].textContent.trim() === store) {
      return parseInt(cells[2].textContent.trim()) || 0;
    }
  }
  return 0;
}

// Generate the final table rows
function generateFinalTable() {
  const tbody = document.querySelector('#finalTable tbody');
  tbody.innerHTML = '';
  // Get projected orders for today (full day) from reportData
  const todayDate = getTodayDateString();
  const todayData = reportData.find(d => d.date === todayDate) || reportData[reportData.length - 1];
  finalStores.forEach(store => {
    // Get projected orders for this store (full day)
    const projectedOrders = todayData.stores[store] || 0;
    // Get total orders from the summary table if available
    let totalOrders = 0;
    // Try to get from summary table inputs if available
    const summaryTable = document.getElementById('summaryTable');
    if (summaryTable) {
      const rows = summaryTable.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[0] && cells[0].textContent.trim() === store) {
          totalOrders = parseInt(cells[1].textContent.trim()) || 0;
        }
      });
    }
    // Calculate attempted orders percentage
    const attemptedPercent = attemptedOrdersPercent(totalOrders, projectedOrders);
    // Generate table row
    const rowHTML = `
      <tr>
        <td>${store}</td>
        <td>${totalOrders}</td>
        <td>${projectedOrders}</td>
        <td>${attemptedPercent}%</td>
      </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', rowHTML);
  });
}

// --- FINAL TABLE PAGE LOGIC --- //
// Show/hide sections based on URL hash
function handleHashChange() {
  const hash = window.location.hash;
  const reportSection = document.getElementById('reportSection');
  const finalTableSection = document.getElementById('finalTableSection');

  if (hash === '#finalTable') {
    reportSection.style.display = 'none';
    finalTableSection.style.display = 'block';
    generateFinalTable(); // Generate final table on hash change
  } else {
    reportSection.style.display = 'block';
    finalTableSection.style.display = 'none';
  }
}

// Initial check
handleHashChange();

// Bind hash change to window event
window.addEventListener('hashchange', handleHashChange);

// Normalize Store Names for consistent display
function normalizeStoreName(name) {
  if (!name) return '';
  let n = name.trim().toLowerCase();
  if (n === 'jp nagar') return 'JP nagar_mnow';

  if (n === 'sarjapur road') return 'Sarjapur Road_mnow';
  return name;
}

// Get current time as a formatted string
function getCurrentTimeString() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Convert Excel date serial to JS Date
function excelDateToJSDate(serial) {
    // Excel date serial to JS Date
    const utc_days  = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;                                        
    const date_info = new Date(utc_value * 1000);
    // Add fractional day as time
    const fractional_day = serial - Math.floor(serial);
    const total_seconds = Math.round(86400 * fractional_day);
    date_info.setSeconds(total_seconds);
    return date_info;
}

function formatDate(dt) {
    const pad = n => n < 10 ? '0' + n : n;
    return `${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}-${dt.getFullYear()} ${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

