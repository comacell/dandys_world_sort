// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'http://i.imgur.com/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
   "Main Toons",
   "Regular Toons",
   "Holiday Toons",
   "Main Twisteds",
   "Regular Twisteds",
   "Holiday Twisteds",
   "Others"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Dandy", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Dandy_Render.png?raw=true"],
  [1, "Astro", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Astro_Render.png?raw=true"],
  [1, "Sprout", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Sprout_Render.png?raw=true"],
  [1, "Pebble", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Pebble_Render.png?raw=true"],
  [1, "Shelly", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Shelly_Render.png?raw=true"],
  [1, "Vee", [1,0,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Vee_Render.png?raw=true"],
  [1, "Bassie", [1,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Bassie_Render.png?raw=true"],
  [1, "Bobette", [1,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Bobette_Render.png?raw=true"],
  [1, "Poppy", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Poppy_Render.png?raw=true"],
  [1, "Boxten", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Boxten_Render.png?raw=true"],
  [1, "Tisha", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Tisha_Render.png?raw=true"],
  [1, "Toodles", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Toodles_Render.png?raw=true"],
  [1, "Looey", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Looey_Render.png?raw=true"],
  [1, "Finn", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Finn_Render.png?raw=true"],
  [1, "Flutter", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Flutter_Render.png?raw=true"],
  [1, "Gigi", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Gigi_Render.png?raw=true"],
  [1, "Glisten", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Glisten_Render.png?raw=true"],
  [1, "Goob", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Goob_Render.png?raw=true"],
  [1, "Razzle & Dazzle", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Razzle_&_Dazzle_Render.png?raw=true"],
  [1, "Rodger", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Rodger_Render.png?raw=true"],
  [1, "Scraps", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Scraps_Render.png?raw=true"],
  [1, "Shrimpo", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Shrimpo_Render.png?raw=true"],
  [1, "Teagan", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Teagan_Render.png?raw=true"],
  [1, "Yatta", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Yatta_Render.png?raw=true"],
  [1, "Cosmo", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Cosmo_Render.png?raw=true"],
  [1, "Connie", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Connie_Render.png?raw=true"],
  [1, "Brightney", [0,1,0,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Brightney_Render.png?raw=true"],
  [1, "Cocoa", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Cocoa_Render.png?raw=true"],
  [1, "Eggson", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Eggson_Render.png?raw=true"],
  [1, "Flyte", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Flyte_Render.png?raw=true"],
  [1, "Coal", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Coal_Render.png?raw=true"],
  [1, "Ginger", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Ginger_Render.png?raw=true"],
  [1, "Rudie", [0,0,1,0,0,0,0], "https://github.com/ibroquentin/dandys_world_sort/blob/master/Touhou%20Character%20Sorting_files/Rudie_Render.png?raw=true"]
];
