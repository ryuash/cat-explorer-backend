// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_params_v1beta1_query_pb = require('../../../cosmos/params/v1beta1/query_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_params_v1beta1_params_pb = require('../../../cosmos/params/v1beta1/params_pb.js');

function serialize_cosmos_params_v1beta1_QueryParamsRequest(arg) {
  if (!(arg instanceof cosmos_params_v1beta1_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.params.v1beta1.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_params_v1beta1_QueryParamsRequest(buffer_arg) {
  return cosmos_params_v1beta1_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_params_v1beta1_QueryParamsResponse(arg) {
  if (!(arg instanceof cosmos_params_v1beta1_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.params.v1beta1.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_params_v1beta1_QueryParamsResponse(buffer_arg) {
  return cosmos_params_v1beta1_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_params_v1beta1_QuerySubspacesRequest(arg) {
  if (!(arg instanceof cosmos_params_v1beta1_query_pb.QuerySubspacesRequest)) {
    throw new Error('Expected argument of type cosmos.params.v1beta1.QuerySubspacesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_params_v1beta1_QuerySubspacesRequest(buffer_arg) {
  return cosmos_params_v1beta1_query_pb.QuerySubspacesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_params_v1beta1_QuerySubspacesResponse(arg) {
  if (!(arg instanceof cosmos_params_v1beta1_query_pb.QuerySubspacesResponse)) {
    throw new Error('Expected argument of type cosmos.params.v1beta1.QuerySubspacesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_params_v1beta1_QuerySubspacesResponse(buffer_arg) {
  return cosmos_params_v1beta1_query_pb.QuerySubspacesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service.
var QueryService = exports.QueryService = {
  // Params queries a specific parameter of a module, given its subspace and
// key.
params: {
    path: '/cosmos.params.v1beta1.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_params_v1beta1_query_pb.QueryParamsRequest,
    responseType: cosmos_params_v1beta1_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_params_v1beta1_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_params_v1beta1_QueryParamsRequest,
    responseSerialize: serialize_cosmos_params_v1beta1_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_params_v1beta1_QueryParamsResponse,
  },
  // Subspaces queries for all registered subspaces and all keys for a subspace.
subspaces: {
    path: '/cosmos.params.v1beta1.Query/Subspaces',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_params_v1beta1_query_pb.QuerySubspacesRequest,
    responseType: cosmos_params_v1beta1_query_pb.QuerySubspacesResponse,
    requestSerialize: serialize_cosmos_params_v1beta1_QuerySubspacesRequest,
    requestDeserialize: deserialize_cosmos_params_v1beta1_QuerySubspacesRequest,
    responseSerialize: serialize_cosmos_params_v1beta1_QuerySubspacesResponse,
    responseDeserialize: deserialize_cosmos_params_v1beta1_QuerySubspacesResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
