type TPartnerData = {
  id: string;
  name: string;
  phone: string;
};

type TAnswer = {
  message: string;
  from_support: number;
  support_read_status: number;
  person_read_status: number;
};

type TAbuse = {
  date: string;
  person_name: string;
  message: string;
  support_read_status: number;
  support_answer_status: number;
  answers: TAnswer[];
};

export type TCall = {
  id: number;
  partnership_id: string;
  partner_data: TPartnerData;
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  in_out: 0 | 1;
  from_site: number;
  source: string;
  errors: any[];
  disconnect_reason: string;
  results: any[];
  stages: any[];
  abuse: TAbuse;
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
};

export type TFilters = {
  callSign: TCallSign,
};

export enum TCallSign {
  INCOMMING = 'INCOMMING',
  OUTGOING = 'OUTGOING',
  ALL = 'ALL',
}
