//9. তুই এমন একটা ফাংশন লিখবি যা দুইটা গানের নাম নিবে। যদি কোনো গান না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে `প্রথম গান` আর `দ্বিতীয় গান` দেখাবে। `backtick` দিয়ে পূর্ণ বাক্যে দেখাস।
const favoriteSongs = (song1 = "প্রথম গান", song2 = "দ্বিতীয় গান") => {
  console.log(`তোর গান: ${song1} এবং ${song2}`);
};
favoriteSongs();
