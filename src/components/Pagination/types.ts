export type Props = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
