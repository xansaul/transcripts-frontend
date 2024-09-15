export interface Video {
  id:          number;
  title:       string;
  upload_date: string;
  txt_file:    TxtFile;
  text:        string;
  url:         string;
}

export interface TxtFile {
  id:  string;
  url: string;
}
