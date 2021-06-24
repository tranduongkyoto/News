import { gql } from '@apollo/client'

const getThethao = gql`
	query {
		thethao {
			id
			title
			des
            href
            img
		}
	}
`
const getKinhdoanh = gql`
	query {
		kinhdoanh {
			id
			title
			des
            href
            img
		}
	}
`
const getKhoahoc = gql`
	query {
		khoahoc {
			id
			title
			des
            href
            img
		}
	}
`
const getSuckhoe = gql`
	query {
		suckhoe {
			id
			title
			des
            href
            img
		}
	}
`
const getGiaitri = gql`
	query {
		giaitri {
			id
			title
			des
            href
            img
		}
	}
`
export { getThethao, getSuckhoe, getKinhdoanh, getKhoahoc, getGiaitri }